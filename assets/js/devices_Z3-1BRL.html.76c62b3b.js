"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94201],{55650:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>g,data:()=>k});var n=i(64516);const l=(0,n.Lk)("h1",{id:"lutron-z3-1brl",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#lutron-z3-1brl"},[(0,n.Lk)("span",null,"Lutron Z3-1BRL")])],-1),a=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1),o=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"Z3-1BRL")],-1),r=(0,n.Lk)("td",null,"Vendor",-1),s=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Aurora smart bulb dimmer")],-1),d=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"action, brightness, linkquality")],-1),u=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/Z3-1BRL.png",alt:"Lutron Z3-1BRL"})])],-1),c=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="enter-pairing-mode" tabindex="-1"><a class="header-anchor" href="#enter-pairing-mode"><span>Enter pairing mode</span></a></h3><p>For new devices:</p><ul><li>Quickly double tap the dimmer button.</li></ul><p>For previously paired devices:</p><ol><li>Quickly tap the dimmer button 4x.</li><li>On the fourth tap, hold until the LED begins to blink.</li><li>Immediately, quickly tap the dimmer button 3 more times.</li></ol><p>See this <a href="https://www.lutron.com/TechnicalDocumentLibrary/0301916_Aurora_Advanced_Install_Guide.pdf#page=7" target="_blank" rel="noopener noreferrer">configuration guide</a> for more information.</p><p>If a red light flashes, the battery is low and must be replaced before pairing.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',9),h=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1),p=(0,n.Fv)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>brightness</code>.</p><h3 id="brightness-numeric" tabindex="-1"><a class="header-anchor" href="#brightness-numeric"><span>Brightness (numeric)</span></a></h3><p>Value can be found in the published state on the <code>brightness</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),m={},g=(0,i(40681).A)(m,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[l,(0,n.Lk)("table",null,[a,(0,n.Lk)("tbody",null,[o,(0,n.Lk)("tr",null,[r,(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=Lutron"},{default:(0,n.k6)((()=>[(0,n.eW)("Lutron")])),_:1})])]),s,d,u])]),c,(0,n.Lk)("p",null,[(0,n.eW)("This device supports OTA updates, for more information see "),(0,n.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>[(0,n.eW)("OTA updates")])),_:1}),(0,n.eW)(".")]),h,(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>[(0,n.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),k=JSON.parse('{"path":"/devices/Z3-1BRL.html","title":"Lutron Z3-1BRL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lutron Z3-1BRL control via MQTT","description":"Integrate your Lutron Z3-1BRL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-09-08T21:16:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Enter pairing mode","slug":"enter-pairing-mode","link":"#enter-pairing-mode","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Brightness (numeric)","slug":"brightness-numeric","link":"#brightness-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722361971000},"filePathRelative":"devices/Z3-1BRL.md"}')}}]);