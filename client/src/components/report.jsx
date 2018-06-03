import React from 'react';
import Popup from 'reactjs-popup';
import ReportThankyou from './reportThankyou.jsx';

const Report = () => (
  <Popup trigger={<button>report</button>} position="right center">

    {close => (
    <div>
      <a className="close" onClick={close}>
        &times;
      </a>
      <div>Do you want to anonymously report this review?</div>
      <div>If so, please choose one of the following reasons.<button className="readMore">Learn more</button></div>
      <input type="radio" name="review_flags" value="Inappropriate content" /><span>Inappropriate content</span>
      <div>This review contains violent, graphic, promotional, or otherwise offensive content.</div>
      <input type="radio" name="review_flags" value="Dishonest or hateful content" /><span>Dishonest or hateful content</span>
      <div>This review is purposefully malicious and assaulting.</div>
      <input type="radio" name="review_flags" value="Fake content" /><span>Fake content</span>
      <div>This review contains false information or may be fake.</div>
      <div><ReportThankyou /></div>
    </div>
    )}
  </Popup>
);

export default Report;


{/* <Popup trigger={<button>Trigger</button>} position="top left">
{close => (
  <div>
    Content here
    <a className="close" onClick={close}>
      &times;
    </a>
  </div>
)}
</Popup> */}


// import React from "react";
// import Warper from "./Warper";
// import Popup from "reactjs-popup";
// //

// const contentStyle = {
//   maxWidth: "600px",
//   width: "90%"
// };

// const CustomModal = () => (
//   <Popup
//     trigger={<button className="button"> Open Modal </button>}
//     modal
//     contentStyle={contentStyle}
//   >
//     {close => (
//       <div className="modal">
//         <a className="close" onClick={close}>
//           &times;
//         </a>
//         <div className="header"> Modal Title </div>
//         <div className="content">
//           {" "}
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
//           nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
//           quibusdam voluptates delectus doloremque, explicabo tempore dicta
//           adipisci fugit amet dignissimos?
//           <br />
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
//           sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
//           repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
//           alias. Vitae?
//         </div>
//         <div className="actions">
//           <Popup
//             trigger={<button className="button"> Menu Demo </button>}
//             position="top center"
//             closeOnDocumentClick
//             contentStyle={{ padding: "0px", border: "none" }}
//           >
//             <div className="menu">
//               <div className="menu-item"> Menu item 1</div>
//               <div className="menu-item"> Menu item 2</div>
//               <div className="menu-item"> Menu item 3</div>
//               <Popup
//                 trigger={<div className="menu-item"> sup Menu </div>}
//                 position="right top"
//                 on="hover"
//                 closeOnDocumentClick
//                 mouseLeaveDelay={300}
//                 mouseEnterDelay={0}
//                 contentStyle={{ padding: "0px", border: "none" }}
//                 arrow={false}
//               >
//                 <div className="menu">
//                   <div className="menu-item"> item 1</div>
//                   <div className="menu-item"> item 2</div>
//                   <div className="menu-item"> item 3</div>
//                 </div>
//               </Popup>
//               <div className="menu-item"> Menu item 4</div>
//             </div>
//           </Popup>
//           <button
//             className="button"
//             onClick={() => {
//               console.log("modal closed ");
//               close();
//             }}
//           >
//             close modal
//           </button>
//         </div>
//       </div>
//     )}
//   </Popup>
// );

// export default Warper(CustomModal);

// .example-warper {
//   width: 100%;
//   padding: 20px 5%;
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   border: 1px #cfcece dashed;
// }

// .button {
//   font-family: "Roboto", Arial, sans-serif;
//   color: #000000;
//   cursor: pointer;
//   padding: 0px 30px;
//   display: inline-block;
//   margin: 10px 15px;
//   text-transform: uppercase;
//   line-height: 2em;
//   letter-spacing: 1.5px;
//   font-size: 1em;
//   outline: none;
//   position: relative;
//   font-size: 14px;
//   border: 3px solid #cfcece;
//   background-color: #ffffff;
//   border-radius: 15px 15px 15px 15px;
//   -webkit-transition: all 0.3s;
//   transition: all 0.3s;
// }

// .button:hover,
// .button.hover {
//   border-color: #2980b9;
// }
// /*
// card 
// */
// .card {
//   font-size: 12px;
// }
// .card > .header {
//   width: 100%;
//   border-bottom: 1px solid gray;
//   font-size: 14px;
//   text-align: center;
// }

// .modal {
//   font-size: 12px;
// }
// .modal > .header {
//   width: 100%;
//   border-bottom: 1px solid gray;
//   font-size: 18px;
//   text-align: center;
//   padding: 5px;
// }
// .modal > .content {
//   width: 100%;
//   padding: 10px 5px;
// }
// .modal > .actions {
//   margin: auto;
// }
// .modal > .actions {
//   width: 100%;
//   padding: 10px 5px;
//   text-align: center;
// }
// .modal > .close {
//   cursor: pointer;
//   position: absolute;
//   display: block;
//   padding: 2px 5px;
//   line-height: 20px;
//   right: -10px;
//   top: -10px;
//   font-size: 24px;
//   background: #ffffff;
//   border-radius: 18px;
//   border: 1px solid #cfcece;
// }

// .example-warper-start {
//   width: 100%;
//   padding: 20px 5%;
//   display: flex;
//   flex-wrap: wrap;
//   border: 1px #cfcece dashed;
// }

// .menu {
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   background: #ffffff;
// }
// .menu-item {
//   cursor: pointer;
//   padding: 5px;
//   height: 28px;
//   border-top: 1px solid rgb(187, 187, 187);
// }
// .menu-item:hover {
//   color: #2980b9;
// }
