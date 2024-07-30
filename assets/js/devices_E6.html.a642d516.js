"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62779],{1903:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>h,data:()=>v});var a=i(64516);const r=(0,a.Lk)("h1",{id:"nous-e6",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#nous-e6"},[(0,a.Lk)("span",null,"Nous E6")])],-1),o=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),n=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"E6")],-1),u=(0,a.Lk)("td",null,"Vendor",-1),d=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Temperature & humidity LCD sensor")],-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"temperature, humidity, battery, temperature_unit_convert, temperature_alarm, max_temperature, min_temperature, temperature_sensitivity, linkquality")],-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E6.png",alt:"Nous E6"})])],-1),l=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1),m=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-unit-convert-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-convert-enum"><span>Temperature unit convert (enum)</span></a></h3><p>Current display unit. Value can be found in the published state on the <code>temperature_unit_convert</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit_convert&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="temperature-alarm-enum" tabindex="-1"><a class="header-anchor" href="#temperature-alarm-enum"><span>Temperature alarm (enum)</span></a></h3><p>Temperature alarm status. Value can be found in the published state on the <code>temperature_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>canceled</code>, <code>lower_alarm</code>, <code>upper_alarm</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric"><span>Max temperature (numeric)</span></a></h3><p>Alarm temperature max. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric"><span>Min temperature (numeric)</span></a></h3><p>Alarm temperature min. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="temperature-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sensitivity-numeric"><span>Temperature sensitivity (numeric)</span></a></h3><p>Temperature sensitivity. Value can be found in the published state on the <code>temperature_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0.1</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),p={},h=(0,i(40681).A)(p,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[r,(0,a.Lk)("table",null,[o,(0,a.Lk)("tbody",null,[n,(0,a.Lk)("tr",null,[u,(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Nous"},{default:(0,a.k6)((()=>[(0,a.eW)("Nous")])),_:1})])]),d,s,c])]),l,(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>[(0,a.eW)("How to use device type specific configuration")])),_:1})])]),m])}]]),v=JSON.parse('{"path":"/devices/E6.html","title":"Nous E6 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Nous E6 control via MQTT","description":"Integrate your Nous E6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-31T16:51:16.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature unit convert (enum)","slug":"temperature-unit-convert-enum","link":"#temperature-unit-convert-enum","children":[]},{"level":3,"title":"Temperature alarm (enum)","slug":"temperature-alarm-enum","link":"#temperature-alarm-enum","children":[]},{"level":3,"title":"Max temperature (numeric)","slug":"max-temperature-numeric","link":"#max-temperature-numeric","children":[]},{"level":3,"title":"Min temperature (numeric)","slug":"min-temperature-numeric","link":"#min-temperature-numeric","children":[]},{"level":3,"title":"Temperature sensitivity (numeric)","slug":"temperature-sensitivity-numeric","link":"#temperature-sensitivity-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722361971000},"filePathRelative":"devices/E6.md"}')}}]);