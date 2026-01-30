import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Import custom icons
import chatIcon from "@/assets/icons/chat-icon.png";
import leaveMessageIcon from "@/assets/icons/leave-message.png";

// Floating 'Leave a message' vertical tab placed above the footer on the right
export const FloatingSupport = () => {
  // Desktop: render the tab as part of the document flow below the footer by
  // inserting a container after the <footer> element and portaling the tab into it.
  const [container, setContainer] = useState<HTMLElement | null>(null);
  // keep overlay visible at all times (floating over the screen)
  const [showOverlay, setShowOverlay] = useState(true);
  const [overlayRoot, setOverlayRoot] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  // extra gap from header bottom to place the live chat button further down
  const LIVE_CHAT_EXTRA_TOP = 12;
  const [liveChatTop, setLiveChatTop] = useState<number>(12 + LIVE_CHAT_EXTRA_TOP);

  useEffect(() => {
    const el = document.createElement('div');
    // full-width container that participates in document flow and right-aligns content
    el.style.width = '100%';
    el.style.display = 'block';
    // Use a flex container with a fixed height so the tab can be sticky within it.
    el.style.display = 'flex';
    el.style.justifyContent = 'flex-end';
    el.style.alignItems = 'flex-end';
    // participate in normal flow so it scrolls with page
    el.style.position = 'static';
    el.style.pointerEvents = 'auto';
    // give the container a height range so position:sticky has an area to act in
    // make the sticky area minimal and position it so the tab fully overlaps the footer
    // TAB height is 160px (the tab element uses height:160). We leave a tiny overlap gap of 2px.
    el.style.height = '2px';
    // pull the container up so the tab's bottom aligns with the footer top (160 - 2 = 158 px)
    el.style.marginTop = '-158px';
    // ensure it renders above footer content
    el.style.zIndex = '200000';
    el.style.padding = '0';

    const footer = document.querySelector('footer');
    // Helper: find nearest scrollable ancestor so the inserted container scrolls with page
    function findScrollableParent(node: Element | null): Element | null {
      let el: Element | null = node;
      while (el) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        if (overflowY === 'auto' || overflowY === 'scroll') return el;
        if (el.scrollHeight > el.clientHeight) return el;
        el = el.parentElement;
      }
      return document.scrollingElement as Element | null || document.documentElement;
    }

    const scrollParent = findScrollableParent(footer || document.body);

    // If footer exists but is fixed or sticky, inserting after it won't produce a scrolling element
    // so prefer to insert after the main content container instead.
    function isFixedOrSticky(node: Element | null) {
      if (!node) return false;
      const pos = window.getComputedStyle(node).position;
      return pos === 'fixed' || pos === 'sticky';
    }

    let inserted = false;
    if (footer && !isFixedOrSticky(footer) && scrollParent && scrollParent.contains(footer)) {
      // insert after footer within the same scrolling container
      if (footer.parentNode) {
        footer.parentNode.insertBefore(el, footer.nextSibling);
        inserted = true;
      } else {
        scrollParent.appendChild(el);
        inserted = true;
      }
    }

    if (!inserted) {
      // try to find main content container candidates to insert after
      const candidates = [
        document.querySelector('main'),
        document.getElementById('root'),
        document.getElementById('app'),
        document.querySelector('[role="main"]')
      ];
      const target = candidates.find(Boolean) as Element | undefined;
      if (target && target.parentNode) {
        target.parentNode.insertBefore(el, target.nextSibling);
        inserted = true;
      }
    }

    if (!inserted) {
      // fallback: append to body so it appears after the main content
      document.body.appendChild(el);
    }

    setContainer(el);

    return () => {
      try {
        if (el.parentNode) el.parentNode.removeChild(el);
      } catch (e) {
        // ignore
      }
    };
  }, []);

  // Compute dynamic top offset for Live chat so it appears below the header
  // and sticks to the top of the viewport when the header scrolls away.
  useEffect(() => {
    const header = document.querySelector('header');
    const update = () => {
      if (!header) {
        setLiveChatTop(12);
        return;
      }
      const rect = header.getBoundingClientRect();
      const base = rect.bottom > 6 ? Math.ceil(rect.bottom) : 6;
      const top = base + LIVE_CHAT_EXTRA_TOP;
      setLiveChatTop(top);
    };

    update();
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Create a dedicated overlay root appended to document.body so the overlay
  // is not clipped/stacked by site containers (avoids stacking-context issues).
  useEffect(() => {
    const node = document.createElement('div');
    node.setAttribute('id', 'floating-support-overlay-root');
    // default positioning; individual overlay element will be placed inside
    node.style.position = 'fixed';
    node.style.right = '0';
    node.style.bottom = '0';
    node.style.top = '0';
    node.style.left = '0';
    node.style.pointerEvents = 'none';
    document.body.appendChild(node);
    setOverlayRoot(node);
    return () => {
      try {
        if (node.parentNode) node.parentNode.removeChild(node);
      } catch (e) { }
    };
  }, []);

  // overlay is always visible; no scroll-based toggling

  const desktopTab = (
    <div style={{ pointerEvents: 'auto', display: 'inline-block', zIndex: 200000 }}>
      <div className="hidden md:flex flex-col items-center">
        {/* Live chat tab - stacked above Leave a message */}
        <div style={{ width: 36, height: 90, position: 'sticky', bottom: '237px' }} className="bg-gray-500 text-white rounded-l-lg rounded-r-none shadow-none flex flex-col items-center pt-1 pb-1">
          <div style={{ width: 30, height: 28 }} className="bg-transparent flex items-center justify-center ">
            <img src={chatIcon} alt="Live chat" className="h-4 w-4 transform -rotate-90" />
          </div>
          <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', fontSize: '12px' }} className="text-white font-medium mt-1">
            Live chat
          </div>
        </div>

        <div style={{ width: 36, height: 120, position: 'sticky', bottom: '132px' }} className="bg-gray-500 text-white rounded-l-lg rounded-r-none shadow-none flex flex-col items-center pt-2 pb-2">
          <div style={{ width: 30, height: 28 }} className="bg-transparent flex items-center justify-center ">
            <img src={leaveMessageIcon} alt="Leave message" className="h-4 w-4 transform -rotate-90" />
          </div>
          <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', fontSize: '12px' }} className="text-white font-medium mt-1">
            Leave{"\u00A0\u00A0"}a message
          </div>
        </div>
      </div>
    </div>
  );

  // Note: Live chat will be rendered as a fixed overlay positioned using `liveChatTop`.

  return (
    <>
      {/* Desktop: portal into the container that we inserted after the footer. Hide it when overlay is shown. */}
      {!showOverlay && (container ? ReactDOM.createPortal(desktopTab, container) : null)}

      {/* Floating overlay: fixed, floats above footer when footer/container is visible */}
      {/* Floating overlay: rendered into the overlayRoot (portal) so it's not clipped */}
      {overlayRoot
        ? ReactDOM.createPortal(
          showOverlay ? (
            <>
              <div style={{ position: 'fixed', right: 0, bottom: 249, zIndex: 2147483647, pointerEvents: 'auto' }} className="hidden md:flex">
                <button aria-label="Live chat" onClick={() => setOpen(true)} className="floating-support-button items-center justify-center bg-transparent border-0 p-0 rounded-l-lg rounded-r-none overflow-hidden shadow-none outline-none focus:outline-none">
                  <div style={{ width: 36, height: 90 }} className="bg-gray-500 text-white rounded-l-lg rounded-r-none shadow-none flex flex-col items-center pt-1 pb-1">
                    <div style={{ width: 30, height: 28 }} className="bg-transparent flex items-center justify-center ">
                      <img src={chatIcon} alt="Live chat" className="h-4 w-4 transform -rotate-90" />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', fontSize: '12px' }} className="text-white font-medium mt-1">
                      Live chat
                    </div>
                  </div>
                </button>
              </div>

              <div style={{ position: 'fixed', right: 0, bottom: 107, zIndex: 2147483647, pointerEvents: 'auto' }} className="hidden md:flex">
                <button aria-label="Leave a message" onClick={() => setOpen(true)} className="floating-support-button items-center justify-center bg-transparent border-0 p-0 rounded-l-lg rounded-r-none overflow-hidden shadow-none outline-none focus:outline-none">
                  <div style={{ width: 36, height: 140 }} className="bg-gray-500 text-white rounded-l-lg rounded-r-none shadow-none flex flex-col items-center pt-2 pb-2">
                    <div style={{ width: 30, height: 28 }} className="bg-transparent flex items-center justify-center ">
                      <img src={leaveMessageIcon} alt="Leave message" className="h-4 w-4 transform -rotate-90" />
                    </div>
                    <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', fontSize: '12px', whiteSpace: 'nowrap' }} className="text-white font-medium mt-1">
                      Leave a message
                    </div>
                  </div>
                </button>
              </div>
            </>
          ) : null,
          overlayRoot
        )
        : showOverlay ? (
          <>
            <div style={{ position: 'fixed', right: 0, top: liveChatTop, zIndex: 2147483647, pointerEvents: 'auto' }} className="hidden md:flex">
              <button aria-label="Live chat" onClick={() => setOpen(true)} className="floating-support-button items-center justify-center bg-transparent border-0 p-0 rounded-l-lg rounded-r-none overflow-hidden shadow-none outline-none focus:outline-none">
                <div style={{ width: 36, height: 90 }} className="bg-gray-500 text-white rounded-l-lg rounded-r-none shadow-none flex flex-col items-center pt-1 pb-1">
                  <div style={{ width: 30, height: 28 }} className="bg-transparent flex items-center justify-center ">
                    <img src={chatIcon} alt="Live chat" className="h-4 w-4 transform -rotate-90" />
                  </div>
                  <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', fontSize: '12px', whiteSpace: 'nowrap' }} className="text-white font-medium mt-1">
                    Live chat
                  </div>
                </div>
              </button>
            </div>

            <div style={{ position: 'fixed', right: 0, bottom: 142, zIndex: 2147483647, pointerEvents: 'auto' }} className="hidden md:flex">
              <button aria-label="Leave a message" onClick={() => setOpen(true)} className="floating-support-button items-center justify-center bg-transparent border-0 p-0 rounded-l-lg rounded-r-none overflow-hidden shadow-none outline-none focus:outline-none">
                <div style={{ width: 36, height: 140 }} className="bg-gray-500 text-white rounded-l-lg rounded-r-none shadow-none flex flex-col items-center pt-2 pb-2">
                  <div style={{ width: 30, height: 28 }} className="bg-transparent flex items-center justify-center ">
                    <img src={leaveMessageIcon} alt="Leave message" className="h-4 w-4 transform -rotate-90" />
                  </div>
                  <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', fontSize: '12px', whiteSpace: 'nowrap' }} className="text-white font-medium mt-1">
                    Leave a message
                  </div>
                </div>
              </button>
            </div>
          </>
        ) : null}

      {/* mobile: circular floating button bottom-right */}
      <div className="md:hidden fixed right-0 bottom-4 z-50">
        <button aria-label="Leave a message" onClick={() => setOpen(true)} className="floating-support-button bg-[#6b6b6b] text-white p-3 rounded-full shadow-none outline-none focus:outline-none inline-flex items-center">
          <img src={chatIcon} alt="Chat" className="h-5 w-5" />
        </button>
      </div>

      {/* Contact modal / dialog (small, matches screenshot) */}
      {open && (
        <div className="fixed right-4 bottom-28 z-50">
          <div className="w-72 bg-white rounded-md shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between bg-red-600 text-white px-3 py-2">
              <div className="font-semibold text-sm">Contact us</div>
              <button aria-label="Close" onClick={() => setOpen(false)} className="p-1 hover:opacity-90">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-3 text-sm text-gray-700 leading-relaxed">
              <p>Thank you for shopping at Lexura Domains. Our agents are busy at the moment.</p>
              <p className="mt-2">Please call us at 1-888-602-0000 (Mon-Fri 6am-8pm ET) or email us (24/7) at customerservice@lexura.example</p>
            </div>
            <div className="p-3 border-t border-border flex justify-center">
              <button onClick={() => setOpen(false)} className="bg-red-600 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};