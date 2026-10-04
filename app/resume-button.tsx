"use client";

export default function ResumeButton({ english }: { english: boolean }) {
  function printResume() {
    const details = [...document.querySelectorAll<HTMLDetailsElement>("main details")];
    const previous = details.map(detail => detail.open);
    details.forEach(detail => { detail.open = true; });
    const restore = () => details.forEach((detail, index) => { detail.open = previous[index]; });
    window.addEventListener("afterprint", restore, { once: true });
    window.print();
  }
  return <button type="button" onClick={printResume} title={english ? "Print or save as PDF" : "인쇄하거나 PDF로 저장"}>Resume <span aria-hidden="true">↗</span></button>;
}
