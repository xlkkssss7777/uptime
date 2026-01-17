<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
  <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"/>
  <title>Uptime Status</title>
  <script src="./config.js"></script>
  <script defer="defer" src="/static/js/main.a57ef58a.js"></script>
  <link href="/static/css/main.e4003dc1.css" rel="stylesheet">
  <!-- Umami -->
  <script defer src="https://umami.001315.xyz/script.js" data-website-id="d2517b7e-0fd1-4a06-bbdd-47d05878b694"></script>
</head>
<body>
  <div id="app"></div>

  <!-- 覆盖页脚文字 -->
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      const app = document.getElementById('app');
      if (app) {
        // 完全替换页脚内容，并加主要网址链接
        app.innerHTML += `
          <div style="margin-top:20px; text-align:center; font-size:14px; color:#666;">
            <p>基于 UptimeRobot 接口制作，检测频率 5 分钟</p>
            <p>© 2026@xlkkssss, <a href="https://uptimerobot.kkkk.hidns.co" target="_blank">https://uptimerobot.kkkk.hidns.co</a>, Version 2.0.0</p>
          </div>
        `;
      }
    });
  </script>
</body>
</html>
