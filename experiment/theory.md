<h3>Flow of Viscous fluid between two parallel plates</h3>

<p>In this case also, the shear stress distribution, the velocity distribution across a section; the ratio of maximum velocity to average velocity and difference of pressure head for a given length of parallel plates, are to be calculated.</p>

<p style="text-align: center;"><img src="./images/fig1.png" style="width: 70%;"></p>
$$ Fig\ 1.\ \ Viscous\ flow\ between\ two\ parallel\ plates  $$

<p>Consider two parallel fixed plates kept at a distance 'h' apart as shown in Fig 1. A viscous fluid is flowing between these two plates from left to right. Consider a fluid element of length &#916;x and thickness &#916;y at a distance y from the lower fixed plate. If p is the intensity of pressure on the face AB of the fluid element then intensity of pressure on the face CD will be <br>
$$ (p + \frac{\partial p}{\partial x}\Delta x) $$
<br>
Let &#964; is the shear stress acting on the face BC then the shear stress on the face AD will be <br>
$$ (\tau + \frac{\partial τ}{\partial y}\Delta y) $$
If the width of the element in the direction perpendicular to the paper is unity then the forces acting on the fluid element are:</p>

<p>The pressure force, (p * &#916;y * 1) on face AB.</p>
<p>The pressure force, <span style="display: inline-block;"> $$ (p + \frac{\partial p}{\partial x}\Delta x * \Delta y * 1) $$</span> on face CD.</p>
<p>The shear force, &#964; * &#916;x * 1 on face BC. </p>
<p>The shear force, <span style="display: inline-block;"> $$ (\tau + \frac{\partial \tau}{\partial y}\Delta y * \Delta x * 1) $$</span> on face AD.</p>

<p>For steady and uniform flow, there is no acceleration and hence the resultant force in the direction of flow is zero.</p>

$$ \therefore p \Delta y * 1 - (p + \frac{\partial p}{\partial x}\Delta x)\Delta y * 1 - \tau \Delta x * 1 + (\tau + \frac{\partial \tau}{\partial y}\Delta y)\Delta x * 1 = 0 $$
or

$$ - \frac{\partial p}{\partial x}\Delta x \Delta y + \frac{\partial \tau}{\partial y}\Delta y \Delta x = 0 $$

<p>Dividing by ΔxΔy, we get</p>

$$ - \frac{\partial p}{\partial x} + \frac{\partial \tau}{\partial y} = 0 $$
or
$$ \frac{\partial p}{\partial x} = \frac{\partial \tau}{\partial y} ...(1) $$

<h3>Velocity Distribution</h3>

<p>To obtain the velocity distribution across a section, the value of shear stress τ = μ(du/dy) from Newton's law of viscosity for laminar flow is substituted in equation (9.7).</p>

$$ \frac{\partial p}{\partial x} = \frac{\partial}{\partial y}(\mu \frac{du}{dy}) = \mu \frac{d^2u}{dy^2} $$

$$ \frac{d^2u}{dy^2} = \frac{1}{\mu} \frac{\partial p}{\partial x} $$

<p>Integrating the above equation w.r.t. y, we get</p>

$$ \frac{du}{dy} = \frac{1}{\mu} \frac{\partial p}{\partial x} y + C_1 $$

<p> <span style="display: inline-block;"> $$ \because \frac{\partial p}{\partial x} $$ </span> is constant </p>

<p>Integrating again</p>

$$ u = \frac{1}{2\mu} \frac{\partial p}{\partial x} y^2 + C_1y + C_2 $$

<p>where C<sub>1</sub> and C<sub>2</sub> are constants of integration. Their values are obtained from the two boundary conditions that is (i) at y = 0, u = 0 (ii) at y = t, u = 0.</p>

<p>The substitution of y = 0, u = 0 in equation (2) gives</p>

$$ 0 = 0 + C_1 \times 0 + C_2 $$
or
$$ C_2 = 0 $$


<p>The substitution of y = t, u = 0 in equation (2) gives</p>

$$ 0 = \frac{1}{2\mu} \frac{\partial p}{\partial x} t^2 + C_1t + 0 $$

$$ C_1 = -\frac{1}{2\mu} \frac{\partial p}{\partial x} t $$

<p>Substituting the values of C₁ and C₂ in equation (2)</p>

$$ u = \frac{1}{2\mu} \frac{\partial p}{\partial x} y^2 + y(-\frac{1}{2\mu} \frac{\partial p}{\partial x} t) $$

$$ u = -\frac{1}{2\mu} \frac{\partial p}{\partial x} [ty - y^2] $$

or

$$ u = \frac{1}{2\mu} \frac{\partial p}{\partial x} [ty - y^2] ...(3) $$

<p>In the above equation, &#956;, <span style="display: inline-block;">$$ \frac{\partial p}{\partial x} $$ </span> and t are constant. It means u varies with the square of y. Hence equation (3) is a equation of a parabola. Hence velocity distribution across a section of the parallel plate is parabolic. This velocity distribution is shown in Fig 2 (a).</p>

<p style="text-align: center;"><img src="./images/fig2.png" style="width: 70%;"></p>
$$ Fig\ 2.\ \ Velocity\ distribution\ and\ shear\ stress\ distribution\ across\ a\ section\ of\ parallel\ plates  $$


<h3>Ratio of Maximum Velocity to Average Velocity</h3>

<p>The velocity is maximum, when (y = t/2)</p>

<p>Substituting this value in equation (3), we get</p>

$$ u_{max} = \frac{1}{2\mu} \frac{\partial p}{\partial x} \left[t \times \frac{t}{2} - \left(\frac{t}{2}\right)^2\right] $$

$$ = \frac{1}{2\mu} \frac{\partial p}{\partial x} \left[\frac{t^2}{2} - \frac{t^2}{4}\right] = \frac{1}{2\mu} \frac{\partial p}{\partial x} \frac{t^2}{4} = \frac{1}{8\mu} \frac{\partial p}{\partial x} t^2 \ \ \ \ \ \ ...(4) $$

<p>The average velocity, <span style="display: inline-block;">$$ \bar{u} $$ </span>, is obtained by dividing the discharge (Q) across the section by the area of the section (t * 1). And the discharge (Q) is obtained by considering the rate of flow of fluid through the strip of thickness dy and integrating it. The rate of flow through strip is</p>

$$ dQ = \text{Velocity at a distance y} \times \text{Area of Strip} $$

$$ = - \frac{1}{2\mu} \frac{\partial p}{\partial x} [ty - y^2] \times dy \times 1 $$

$$ \therefore Q = \int_{0}^{t} dQ = \int_{0}^{t} \frac{1}{2\mu} \frac{\partial p}{\partial x} [ty - y^2] dy $$

$$ = - \frac{1}{2\mu} \frac{\partial p}{\partial x} \left[\frac{ty^2}{2} - \frac{y^3}{3}\right]_{0}^{t} = \frac{1}{2\mu} \frac{\partial p}{\partial x} \left[\frac{t^3}{2} - \frac{t^3}{3}\right] $$

$$ = - \frac{1}{2\mu} \frac{\partial p}{\partial x} \frac{t^3}{6} = - \frac{1}{12\mu} \frac{\partial p}{\partial x} t^3 $$

$$ \bar{u} = \frac{Q}{\text{Area}} = - \frac{\frac{1}{12\mu} \frac{\partial p}{\partial x} t^3}{t \times 1} = - \frac{1}{12\mu} \frac{\partial p}{\partial x} t^2 \ \ \ \ \ \  ...(5) $$

<p>Dividing equation (4) by equation (5), we get</p>

$$ \frac{U_{max}}{\bar{u}} = \frac{\frac{1}{8\mu} \frac{\partial p}{\partial x} t^2}{\frac{1}{12\mu} \frac{\partial p}{\partial x} t^2} = \frac{12}{8} = \frac{3}{2} \ \ \ \ \ \ ...(6) $$

<h3>Drop of Pressure head for a given Length</h3>

<p>From equation (5), we have</p>

$$ \bar{u} = -\frac{1}{12\mu} \frac{\partial p}{\partial x} t^2 $$

or

$$ \frac{\partial p}{\partial x} = -\frac{12\mu \bar{u}}{t^2} $$

<p>Integrating this equation w.r.t. x, we get</p>

$$ \int_{p_2}^{p_1} dp = \int_{x_2}^{x_1} -\frac{12\mu \bar{u}}{t^2} dx $$

$$ p_1 - p_2 = -\frac{12\mu \bar{u}}{t^2} [x_1 - x_2] = \frac{12\mu \bar{u}}{t^2} [x_2 - x_1] $$

or
$$ p_1 - p_2 = \frac{12\mu\bar{u}L}{t^2} $$
$$ \because x_1 - x_2 = L $$
<p>If h<sub>f</sub> is the drop of pressure head, then</p>
$$ h_f = \frac{p_1 - p_2}{\rho g} = \frac{12\mu\bar{u}L}{\rho gt^2} \ \ \ \ \ \ ...(10) $$

<p style="text-align: center;"><img src="./images/fig3.png" style="width: 60%;"></p>
$$ Fig\ 3.  $$

<h3>Shear Stress Distribution</h3>

<p>It is obtained by substituting the value of u from equation (3) into</p>

$$ \tau = \mu \frac{du}{dy} $$

$$ \tau = \mu \frac{\partial}{\partial y}[-\frac{1}{2\mu} \frac{\partial p}{\partial x} (ty - y^2)] = \mu[-\frac{1}{2\mu} \frac{\partial p}{\partial x} (t - 2y)] $$

$$ \tau = -\frac{1}{2} \frac{\partial p}{\partial x} (t - 2y) \ \ \ \ \ \ ...(11) $$

<p>In equation (11), <span style="display: inline-block;">$$ \frac{\partial p}{\partial x} $$ </span> and t are constant. Hence &#964; varies linearly with y. The shear stress distribution is shown in Fig 2 (b). Shear stress is maximum, when y = 0 or t at the walls of the plates. Shear stress is zero, when y = t/2 that is at the centre line between the two plates. Max. shear stress (&#964;<sub>o</sub>) is given by</p>

$$ \tau_0 = -\frac{1}{2} \frac{\partial p}{\partial x} t \ \ \ \ \ \ ...(12) $$