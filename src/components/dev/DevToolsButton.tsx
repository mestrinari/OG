// import { useState } from "react";
// import { FloatingWindow } from "./FloatingWindow";
// import { NetworkDebuggerModal } from "./NetworkDebuggerModal";

// export function DevToolsButton() {
//   const [open, setOpen] = useState(false);

//   const supported = "documentPictureInPicture" in window;

//   return (
//     <>
//       <button
//         type="button"
//         onClick={() => setOpen(true)}
//         disabled={!supported}
//       >
//         Abrir DevTools flutuante
//       </button>

//       <FloatingWindow
//         open={open}
//         onClose={() => setOpen(false)}
//         width={900}
//         height={700}
//       >
//         <NetworkDebuggerModal onClose={() => setOpen(false)} />
//       </FloatingWindow>
//     </>
//   );
// }