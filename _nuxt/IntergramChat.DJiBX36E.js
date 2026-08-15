import{r as n,u as s,c as i,o as u,a as l,b as d}from"./entry.Dh6sqGIP.js";const m={__name:"IntergramChat",setup(c){const t=n(!1);return s(i(()=>t.value?{script:[{hid:"intergram-config",innerHTML:`
          window.intergramId = "888206125";
          window.intergramCustomizations = {
            titleClosed: 'Chat with Rahul R',
            titleOpen: 'Chat with Rahul R',
            introMessage: 'Hi 👋 Please share your name and email before starting.',
            autoResponse: 'Thanks for your message. I will reply shortly.',
            autoNoResponse: 'Currently away. I will get back to you soon.',
            mainColor: '#be0c45',
            alwaysUseFloatingButton: true
          };
        `,type:"text/javascript"},{hid:"intergram-widget",src:"https://www.intergram.xyz/js/widget.js",async:!0,defer:!0}]}:{})),u(()=>{const e=()=>{t.value||(t.value=!0,o())},a=["scroll","pointerdown","keydown","touchstart"],o=()=>{a.forEach(r=>window.removeEventListener(r,e))};a.forEach(r=>window.addEventListener(r,e,{passive:!0,once:!0})),typeof window<"u"&&("requestIdleCallback"in window?window.requestIdleCallback(()=>{setTimeout(e,5e3)}):setTimeout(e,6e3))}),(e,a)=>(d(),l("div"))}};export{m as default};
