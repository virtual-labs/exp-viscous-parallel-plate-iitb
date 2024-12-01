let act3_div;
function activity3(btn) {
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
         <h3>Activity 3</h3>
         <br>
         <br>
         <img src="./images/fig1.png" style="width:50%">
         <br>
         <br>
         <p style="text-align:left;">
            An oil of viscousity ${mu_a3 * 10} poise flows between two parallel plates which are kept at a distance of ${t_a3 * 1000} mm apart. <br>
            Find the rate of flow of oil between the plates if the drop of pressure in a length of ${L_a3} m be ${p_drop_a3 / Math.pow(10, 4)} N/cm<sup>2</sup>. <br>
            The width of the plate is ${b_a3 * 1000} mm. 
         </p>
         <br>

         <p class="fs-2vw fb-600" style="text-align:left;">
            Average Velocity
         </p>

         $$
            P_1 - P_2 = \\frac{12\μ\\bar{u}L}{t^2} 
         $$

         <div id="act3-u-bar-div">
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-md-4">
                  $$\\bar{u} = \\frac{(P_1 - P_2) \× t^2}{12\μL} = $$
               </div>
               <div class="row justify-content-center col-md-3"   style="flex-wrap:nowrap; align-items:center;">
                  <input  type='number' style="margin:0 5px; width:70%" id='act3-u-bar-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
               </div>
            </div>
            <br>
            <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_u_bar();' id='act3-vf-btn1'>Verify</button>
         </div>
      </div>   
   `;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function internal_calculation3() {
    t_a3 = random1(40, 61) / 1000;
    u_bar_a3 = (p_drop_a3 * Math.pow(t_a3, 2)) / (12 * mu_a3 * L_a3);
    Q_a3 = b_a3 * t_a3 * u_bar_a3;
    console.log('mu_a3', mu_a3);
    console.log('t_a3', t_a3);
    console.log('b_a3', b_a3);
    console.log('L_a3', L_a3);
    console.log('p_drop_a3', p_drop_a3);
    console.log('u_bar_a3', u_bar_a3);
    console.log('Q_a3', Q_a3);
}
function a3_verify_u_bar() {
    let inp = (document.getElementById('act3-u-bar-inp'));
    console.log(u_bar_a3);
    if (!verify_values(parseFloat(inp.value), u_bar_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-u-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\bar{u} = \\frac{(P_1 - P_2) \× t^2}{12\μL} =  ${parseFloat(u_bar_a3.toFixed(4))} \\ m/s $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Discharge
      </p>
      <div id="act3-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Q = A \× \\bar{u} = b \× t \× \\bar{u} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-Q-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>3</sup>/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_Q();' id='act3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_Q() {
    let Q_inp = (document.getElementById('act3-Q-inp'));
    console.log(Q_a3);
    if (!verify_values(parseFloat(Q_inp.value), Q_a3)) {
        Q_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Q_inp.style.border = '1px solid #ced4da';
        Q_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = A \× \\bar{u} = b \× t \× \\bar{u} =  ${parseFloat(Q_a3.toFixed(4))} \\ m^3/s $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map