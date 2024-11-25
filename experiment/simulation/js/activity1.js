let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Viscous flow between two parallel plate</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>
      <img src="./images/fig1.png" style="width:50%">
      <br>
      <br>
      <p style="text-align:left">
         Calculate (a) the pressure gradient along flow, (b) the average velocity and (c) the discharge for an oil of viscousity ${mu_a1} Ns/m<sup>2</sup> flowing between two stationary parallel plates ${b_a1} m wide maintained ${t_a1 * 1000} mm apart.
      </p>

      <p style="text-align:left;">
         The velocity midway between the plates is ${U_max_a1} m/s.
      </p>
      <br>

      <p class="fs-2vw fb-600" style="text-align:left;">
         Pressure Gradient
      </p>

      <div id="act1-pg-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\\frac{dP}{dx} = \\frac{8\μU_{max}}{t^2} = $$
            </div>
            <div class="row justify-content-center col-md-5" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:50%" id='act1-pg-inp' class='form-control fs-16px' /><span style="display:contents;"> N/m<sup>2</sup>&nbsp;  per m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_pg();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    U_max_a1 = parseFloat(random(1.8, 2.5).toFixed(1));
    b_a1 = parseFloat(random(0.9, 1.5).toFixed(1));
    t_a1 = random1(8, 13) / 1000;
    pg_a1 = (8 * mu_a1 * U_max_a1) / Math.pow(t_a1, 2);
    u_bar_a1 = U_max_a1 * (2 / 3);
    Q_a1 = b_a1 * t_a1 * u_bar_a1;
    console.log('U_max_a1', U_max_a1);
    console.log('b_a1', b_a1);
    console.log('t_a1', t_a1);
    console.log('pg_a1', pg_a1);
    console.log('u_bar_a1', u_bar_a1);
    console.log('Q_a1', Q_a1);
}
function a1_verify_pg() {
    let pg_inp = (document.getElementById('act1-pg-inp'));
    console.log(pg_a1);
    if (!verify_values(parseFloat(pg_inp.value), pg_a1)) {
        pg_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        pg_inp.style.border = '1px solid #ced4da';
        pg_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-pg-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\frac{dP}{dx} = \\frac{8\μU_{max}}{t^2} =  ${parseFloat(pg_a1.toFixed(3))} \\ N/m^2 \\ per \\ m $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Average Velocity
      </p>
      <div id="act1-u-bar-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$\\bar{u} = U_{max} \× \\frac{2}{3} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-u-bar-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_u_bar();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_u_bar() {
    let u_bar_inp = (document.getElementById('act1-u-bar-inp'));
    console.log(u_bar_a1);
    if (!verify_values(parseFloat(u_bar_inp.value), u_bar_a1)) {
        u_bar_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        u_bar_inp.style.border = '1px solid #ced4da';
        u_bar_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-u-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\bar{u} = U_{max} \× \\frac{2}{3}  =  ${parseFloat(u_bar_a1.toFixed(3))} \\ m/s $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Discharge
      </p>
      <div id="act1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$Q = A \× \\bar{u} = b \× t \× \\bar{u} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>3</sup>/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_Q();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_Q() {
    let Q_inp = (document.getElementById('act1-Q-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(Q_inp.value), Q_a1)) {
        Q_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Q_inp.style.border = '1px solid #ced4da';
        Q_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = A \× \\bar{u} = b \× t \× \\bar{u} =  ${parseFloat(Q_a1.toFixed(4))} \\ m^3/s $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map