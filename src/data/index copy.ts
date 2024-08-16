// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Rotating Circle</title>
//     <style>
//         body {
//             background-color: #000;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             margin: 0;
//             font-family: Arial, sans-serif;
//             flex-direction: column;
//       overflow:hidden;
//         }
//         .container {
//             position: relative;
//             width: 500px;
//             height: 500px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//         }
//         .circle {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//       bottom: 40%;
//         }
//         :root {
//             --arms-count: 24; /* Default number of arms */
//             --rotation-degree: calc(360deg / var(--arms-count));
//         }
//         .box {
//             position: absolute;
//             width: 120px;
//             height: 120px;
//             background: rgba(255, 255, 255, 0.1);
//             border-radius: 15px;
//             backdrop-filter: blur(10px);
//             border: 1px solid rgba(255, 255, 255, 0.2);
//             transform-origin: center 750px;
//             transform: rotate(calc(var(--rotation-degree) * var(--arm-index))) translateY(-250px);
//             animation: rotate 30s linear infinite;
//             animation-delay: calc(-30s / var(--arms-count) * var(--arm-index));
//         }
//         @keyframes rotate {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//         }
//         .center-content {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             text-align: center;
//             color: white;
//         }
//         .join-button {
//             background-color: white;
//             color: black;
//             border: none;
//             padding: 10px 20px;
//             border-radius: 20px;
//             margin-top: 20px;
//             cursor: pointer;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="circle">
//             <!-- 12 boxes positioned in a circle -->
//             <div class="box" style="--arm-index: 0;"></div>
//             <div class="box" style="--arm-index: 1;"></div>
//             <div class="box" style="--arm-index: 2;"></div>
//             <div class="box" style="--arm-index: 3;"></div>
//             <div class="box" style="--arm-index: 4;"></div>
//             <div class="box" style="--arm-index: 5;"></div>
//             <div class="box" style="--arm-index: 6;"></div>
//             <div class="box" style="--arm-index: 7;"></div>
//             <div class="box" style="--arm-index: 8;"></div>
//             <div class="box" style="--arm-index: 9;"></div>
//             <div class="box" style="--arm-index: 10;"></div>
//             <div class="box" style="--arm-index: 11;"></div>
//           	<div class="box" style="--arm-index: 12;"></div>
//             <div class="box" style="--arm-index: 13;"></div>
//             <div class="box" style="--arm-index: 14;"></div>
//             <div class="box" style="--arm-index: 15;"></div>
//             <div class="box" style="--arm-index: 16;"></div>
//             <div class="box" style="--arm-index: 17;"></div>
//             <div class="box" style="--arm-index: 18;"></div>
//             <div class="box" style="--arm-index: 19;"></div>
//             <div class="box" style="--arm-index: 20;"></div>
//             <div class="box" style="--arm-index: 21;"></div>
//             <div class="box" style="--arm-index: 22;"></div>
//             <div class="box" style="--arm-index: 23;"></div>

//         </div>
//         <div class="center-content">
//             <h1>Gather here</h1>
//             <p>Our platform is currently in beta and invite-only. Request an invite now to receive a link to create your account.</p>
//             <button class="join-button">Join Gather</button>
//         </div>
//     </div>
// </body>
// </html>
