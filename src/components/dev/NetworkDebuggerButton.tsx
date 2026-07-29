// import { FloatingWindow } from "./FloatingWindow";
// import { NetworkDebuggerModal } from "../../NetworkDebuggerModal";

// export function NetworkDebuggerFloating() {
//   return (
//     <FloatingWindow
//       title="Network Debugger"
//       width={1080}
//       height={760}
//       dark={false}
//       renderTrigger={(open, { isOpen, isOpening, isSupported }) => (
//         <button
//           type="button"
//           onClick={open}
//           disabled={isOpening}
//         >
//           {isOpening
//             ? "Abrindo..."
//             : isOpen
//               ? "Debugger aberto"
//               : isSupported
//                 ? "Abrir debugger flutuante"
//                 : "Abrir debugger"}
//         </button>
//       )}
//     >
//       {(close) => (
//         <NetworkDebuggerModal onClose={close} />
//       )}
//     </FloatingWindow>
//   );
// }