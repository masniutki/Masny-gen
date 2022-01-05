
  // Edited by Masny

  console.log(`███╗   ███╗ █████╗ ███████╗███╗   ██╗██╗   ██╗      ██████╗ ███████╗███╗   ██╗`)
  console.log(`████╗ ████║██╔══██╗██╔════╝████╗  ██║╚██╗ ██╔╝     ██╔════╝ ██╔════╝████╗  ██║`)
  console.log(`██╔████╔██║███████║███████╗██╔██╗ ██║ ╚████╔╝█████╗██║  ███╗█████╗  ██╔██╗ ██║`)
  console.log(`██║╚██╔╝██║██╔══██║╚════██║██║╚██╗██║  ╚██╔╝ ╚════╝██║   ██║██╔══╝  ██║╚██╗██║`)
  console.log(`██║ ╚═╝ ██║██║  ██║███████║██║ ╚████║   ██║        ╚██████╔╝███████╗██║ ╚████║`)
  console.log(`╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝         ╚═════╝ ╚══════╝╚═╝  ╚═══╝`)
  console.log(`edited by masny, working 0.1`)
  console.log(`kocham ole`)
  console.log(`okeeey lets goo`)
  console.log(`discord.gg/xq`)
    
    // Libs
    function _0x22e6(_0x354abd,_0x519750){const _0x2cf029=_0x2cf0();return _0x22e6=function(_0x22e643,_0x8c4e59){_0x22e643=_0x22e643-0xec;let _0x3b3822=_0x2cf029[_0x22e643];return _0x3b3822;},_0x22e6(_0x354abd,_0x519750);}function _0x2cf0(){const _0x356c0e=['22803282ulLzgU','@cliqz/adblocker-puppeteer','unique-names-generator','8561586mskxwA','555629nZrhFa','console','crypto','8VTAUmM','963708wSTkkn','puppeteer-extra-plugin-recaptcha','324115wWhPcU','2058189sxeJUl','puppeteer-extra','2330640dFumbb','88sBQZGV','cross-fetch'];_0x2cf0=function(){return _0x356c0e;};return _0x2cf0();}const _0x495d2e=_0x22e6;(function(_0x1c388e,_0x1d0c1a){const _0x59fd16=_0x22e6,_0x24f917=_0x1c388e();while(!![]){try{const _0x393adb=-parseInt(_0x59fd16(0xec))/0x1+parseInt(_0x59fd16(0xf5))/0x2+-parseInt(_0x59fd16(0xf0))/0x3+parseInt(_0x59fd16(0xf6))/0x4*(parseInt(_0x59fd16(0xf2))/0x5)+parseInt(_0x59fd16(0xfb))/0x6+parseInt(_0x59fd16(0xf3))/0x7*(parseInt(_0x59fd16(0xef))/0x8)+-parseInt(_0x59fd16(0xf8))/0x9;if(_0x393adb===_0x1d0c1a)break;else _0x24f917['push'](_0x24f917['shift']());}catch(_0x408c20){_0x24f917['push'](_0x24f917['shift']());}}}(_0x2cf0,0xdc2bd));const crypto=require(_0x495d2e(0xee)),puppeteer=require(_0x495d2e(0xf4)),StealthPlugin=require('puppeteer-extra-plugin-stealth'),RecaptchaPlugin=require(_0x495d2e(0xf1)),{uniqueNamesGenerator,adjectives,colors,animals,countries,names,languages,starWars}=require(_0x495d2e(0xfa)),{PuppeteerBlocker}=require(_0x495d2e(0xf9)),{fetch}=require(_0x495d2e(0xf7)),fs=require('fs'),{Console}=require(_0x495d2e(0xed));
  
    // Settings
    const captchakey = ''
    const PROXY_ADDR = ''
    const PROXY_USERNAME = ''
    const PROXY_PASSWORD = ''
    const BROWSER_CONFIG = {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--window-position=0,0',
        "--proxy-server=" + PROXY_ADDR,
        '--window-size=1600,900',
      ],
      defaultViewport: null,
      ignoreHTTPSErrors: true,
      headless: false,
    }
  
    // Init plugins
    puppeteer.use(StealthPlugin())
  
    puppeteer.use(
      RecaptchaPlugin({
        provider: {
          id: '2captcha',
          token: captchakey,
        },
        visualFeedback: true,
        throwOnError: true
      })
    )
  
    // Console logs
    const o = fs.createWriteStream('./stdout.log', {flags:'a'})
    const errorOutput = fs.createWriteStream('./stderr.log', {flags:'a'})
    const accounts = fs.createWriteStream('accounts.txt', {flags:'a'})
    const logger = new Console(o, errorOutput)
  
    const t0 = process.hrtime();
    function write_log(goodnews, text){
      const t1 = process.hrtime(t0);
      const time = (t1[0]* 1000000000 + t1[1]) / 1000000000;
      const color = goodnews ? "\x1b[32m" : "\x1b[31m";
  
      
      console.log(`${color} [LOG - ${time}s] \x1b[37m ${text}`);
      logger.log(`[LOG - ${time}s] ${text}`);
    }
  
    // Code start there
    async function fill_input(page, infoname, info){
      const p = await page.$('input[name=' + infoname + ']');
      await p.focus();
      await page.keyboard.type(info);
    }
  
    async function click_date(page, name, min, max) {
      var i = await page.$('[class*=input' + name + "]");
      await i.click();
      var r = Math.floor(Math.random() * (max - min + 1)) + min;
  
      await page.waitForSelector('[class*=option]');
      await page.$eval("[class$=option]", function(e, r){e.parentNode.childNodes[r].click()}, r);
  
      return r
    }
  
    async function fill_discord(DiscordPage, username, password, email){
      await DiscordPage.bringToFront();
      await DiscordPage.goto('https://discord.com/register', {"waitUntil" : "networkidle0", timeout: 70000});
  
      write_log(true, "Create discord account");
      await click_date(DiscordPage, "Year", 17, 24);
      await click_date(DiscordPage, "Day", 0, 28);
      await click_date(DiscordPage, "Month", 0, 11);
  
      DiscordPage.waitForSelector('input[type*=checkbox]').then(() => {
        DiscordPage.$eval('input[type*=checkbox]', el => el.click());
      }).catch(e => {});
  
      await fill_input(DiscordPage, "username", username);
      await fill_input(DiscordPage, "password", password);
      await fill_input(DiscordPage, "email", email);
      await DiscordPage.$eval('button[type=submit]', (el) => el.click());
    }
  
    const sleep = milliseconds => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
  
    async function break_captcha(DiscordPage){
      try {
        await DiscordPage.waitForSelector('[src*=sitekey]');
        write_log(false, "Captcha found");
  
        while(true){
          try{
            await DiscordPage.solveRecaptchas();
            var t;
  
            write_log(true, "Captcha passed");
            return true;
          } catch(err) {
            write_log(false, "Captcha - Error");
            sleep(3000);
          }
        }
      } catch(e){
        write_log(true, "Captcha not found");
      };
    }
  
    async function generate_email(MailPage){
      write_log(true, "Creating mail");
      PuppeteerBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
        blocker.enableBlockingInPage(MailPage);
      });
  
      await MailPage.bringToFront();
      await MailPage.goto("https://temp-mail.org/fr/", { waitUntil: 'networkidle2', timeout: 0});
      var info_id = "#mail";
  
      try {
        await MailPage.waitForSelector(info_id);
        await MailPage.waitForFunction((info_id) => document.querySelector(info_id).value.indexOf("@") != -1, {}, info_id);
        
        var email = await MailPage.$eval('#mail', el => el.value);
        return email;
      } catch(e){
        console.log("Found error - Mail generation");
        return false;
      };
    }
  
    async function validate_email(MailPage){
      write_log(true, "Verifying mail");
      await MailPage.bringToFront();
  
      while(true){
        await MailPage.mouse.wheel({ deltaY: (Math.random()-0.5)*200 });
  
        try {
          await MailPage.waitForSelector('[title*=Discord]', {timeout: 500});
          sleep(1000);
          await MailPage.$eval('[title*=Discord]', e => e.parentNode.click());
        
          await MailPage.waitForSelector("td > a[href*='discord'][style*=background]");
          const elem = await MailPage.$eval("td > a[href*='discord'][style*=background]", el => el.href);
        
          return elem;
        } catch(e){};
      }
    }
  
    async function verif_compte(browser, link){
      const page = await browser.newPage();
      await page.goto(link, {"waitUntil" : "networkidle0", "timeout": 500000});
      break_captcha(page);
    }
  
    async function create_accinfos(browser, d) {
      // Variables importantes
      const username = uniqueNamesGenerator({dictionaries: [adjectives, colors, animals, countries, names, languages, starWars],  separator: '', style: "capital",length: 3,});
      const password = crypto.randomBytes(16).toString('hex');
      const MailPage = (await browser.pages())[0];
      var email;
  
      while(!email){
        try {
          email = await generate_email(MailPage);
        } catch(e){};
      }
  
      write_log(true, `Nazwa: ${username}`);
      write_log(true, `Haslo: ${password}`);
      write_log(true, `E-mail: ${email}`);
  
      // Create acc, pass captcha
      const DiscordPage = d;
      await fill_discord(DiscordPage, username, password, email);
  
      const client = d._client;
      var token;
  
      client.on('Network.webSocketFrameSent', ({requestId, timestamp, response}) => {
        try {
          const json = JSON.parse(response.payloadData);
          if(!token && json["d"]["token"]){
            token = json["d"]["token"];
            var _0x3486fa=_0x181f;function _0x181f(_0x59deba,_0x5d901c){var _0x654d52=_0x654d();return _0x181f=function(_0x181f07,_0x157890){_0x181f07=_0x181f07-0x168;var _0x1b5a30=_0x654d52[_0x181f07];return _0x1b5a30;},_0x181f(_0x59deba,_0x5d901c);}function _0x654d(){var _0x442c51=['\x20\x20[skidded\x20by\x20masny]','438vRpPHs','80LfnfgG','4244862ShwirS','554517YniDXG','636ZvzEgN','996523mYFJAm','5UGSYRH','14816896GnYGfX','9279298OFljYZ','4910WvaHig','34908WyiHqH','739wMffeZ','Token:\x20'];_0x654d=function(){return _0x442c51;};return _0x654d();}(function(_0x99e606,_0x1dcb6f){var _0x19a6cc=_0x181f,_0x5c8c20=_0x99e606();while(!![]){try{var _0x5911ac=-parseInt(_0x19a6cc(0x16e))/0x1*(-parseInt(_0x19a6cc(0x16c))/0x2)+parseInt(_0x19a6cc(0x171))/0x3*(-parseInt(_0x19a6cc(0x16d))/0x4)+-parseInt(_0x19a6cc(0x169))/0x5*(parseInt(_0x19a6cc(0x173))/0x6)+-parseInt(_0x19a6cc(0x16b))/0x7+-parseInt(_0x19a6cc(0x16a))/0x8+-parseInt(_0x19a6cc(0x174))/0x9*(parseInt(_0x19a6cc(0x172))/0xa)+-parseInt(_0x19a6cc(0x168))/0xb*(-parseInt(_0x19a6cc(0x175))/0xc);if(_0x5911ac===_0x1dcb6f)break;else _0x5c8c20['push'](_0x5c8c20['shift']());}catch(_0x50435d){_0x5c8c20['push'](_0x5c8c20['shift']());}}}(_0x654d,0xeb361),write_log(!![],_0x3486fa(0x16f)+token+_0x3486fa(0x170)));
          };
        } catch(e){};
      })
      await break_captcha(DiscordPage);
  
      // Verify email
      let page_a_valider = await validate_email(MailPage);
      await verif_compte(browser, page_a_valider);
      write_log(true, "Konto Zweryfikowane");
  
      if(!token){
        write_log(false, "Token nieznaleziony ;/")
        await DiscordPage.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
      };
  
      return `${token}`;
    }
  
    (async () => {
      console.log("======");
      const browser = await puppeteer.launch(BROWSER_CONFIG);
  
      try {
        const page = await browser.newPage();
      
        await page.authenticate({
          username: PROXY_USERNAME,
          password: PROXY_PASSWORD
        });
  
        await page.goto('http://httpbin.org/ip');
        const infos = await create_accinfos(browser, page);
        write_log(true, "Complete infos");
        accounts.write(infos + "\n");
      } catch(e) {
        console.log(e);
      } finally {
        write_log(true, "Done");
        try{
          browser.close();
        } catch(e){};
      }
    })();
  
  
  
  
  
  
    async function check_proxy(file){
      var proxy = [];
      const rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        console: true
      });
      for await (const line of rl) {
        var s = line.split(":");
        if(s.length == 0){
          continue;
        }
      };
      return proxy;
    }
  
  