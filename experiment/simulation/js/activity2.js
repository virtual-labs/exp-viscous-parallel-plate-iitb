let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
         <h3>Activity 2</h3>
         <br>
         <br>
         <img src="./images/fig1.png" style="width:50%">
         <br>
         <br>
         <p style="text-align:left;">
            Determine the pressure gradient, shear stress at the two horizontal parallel plates, discharge per meter width for the laminar flow of oil with a maximum velocity of ${U_max_a2} m/s between two horizontal parallel plates which are ${t_a2 * 1000} mm apart. <br> &mu; = ${mu_a2} Ns/m<sup>2</sup> .
         </p>
         <br>

         <p class="fs-2vw fb-600" style="text-align:left;">
         Pressure Gradient
      </p>

      <div id="act2-pg-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\\frac{dP}{dx} = \\frac{8\μU_{max}}{t^2} = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act2-pg-inp' class='form-control fs-16px' /><span style="display:contents;"> N/m<sup>2</sup>&nbsp; per m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_pg();' id='act2-vf-btn1'>Verify</button>
      </div>
      </div>   
   `;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    U_max_a2 = parseFloat(random(1.8, 2.5).toFixed(1));
    t_a2 = random1(80, 111) / 1000;
    pg_a2 = (8 * mu_a2 * U_max_a2) / Math.pow(t_a2, 2);
    shear_st_a2 = -pg_a2 * (1 / 2) * t_a2;
    Q_a2 = (2 / 3) * U_max_a2 * t_a2 * b_a2;
    console.log('U_max_a2', U_max_a2);
    console.log('t_a2', t_a2);
    console.log('pg_a2', pg_a2);
    console.log('shear_st_a2', shear_st_a2);
    console.log('Q_a2', Q_a2);
}
function a2_verify_pg() {
    let pg_inp = (document.getElementById('act2-pg-inp'));
    console.log(pg_a2);
    if (!verify_values(parseFloat(pg_inp.value), pg_a2)) {
        pg_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        pg_inp.style.border = '1px solid #ced4da';
        pg_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-pg-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\frac{dP}{dx} = \\frac{8\μU_{max}}{t^2} =  ${parseFloat(pg_a2.toFixed(3))} \\ N/m^2 \\ per \\ m $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Shear Stress at wall
      </p>
      <div id="act2-shear-st-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$\\tau_0 = -\\frac{dP}{dx} \× \\frac{1}{2} \× t = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-shear-st-inp' class='form-control fs-16px' /><span style="display:contents;"> N/m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_shear_st();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_shear_st() {
    let shear_inp = (document.getElementById('act2-shear-st-inp'));
    console.log(shear_st_a2);
    if (!verify_values(parseFloat(shear_inp.value), shear_st_a2)) {
        shear_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        shear_inp.style.border = '1px solid #ced4da';
        shear_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-shear-st-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\tau_0 = -\\frac{dP}{dx} \× \\frac{1}{2} \× t  =  ${parseFloat(shear_st_a2.toFixed(3))} \\ N/m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Discharge
      </p>
      <div id="act2-Q-div">
      $$Q = A \× \\bar{u} = b \× t \× \\frac{2}{3}U_{max}  $$
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-1">
               $$Q =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Q-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>3</sup>/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Q();' id='act2-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_Q() {
    let Q_inp = (document.getElementById('act2-Q-inp'));
    console.log(Q_a2);
    if (!verify_values(parseFloat(Q_inp.value), Q_a2)) {
        Q_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Q_inp.style.border = '1px solid #ced4da';
        Q_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = A \× \\bar{u} = b \× t \× \\frac{2}{3}U_{max} =  ${parseFloat(Q_a2.toFixed(3))} \\ m^3/s $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity3(this);' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map