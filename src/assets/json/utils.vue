<script type="text/javascript">
  /**
   * @description  utils , operate cookies
   */
  const cookie = {
      get: function(n) {
          var m = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
          return !m ? "" : decodeURIComponent(m[2])
      },
      set: function(name, value, hour, domain, path) {
          var expire = new Date();
          expire.setTime(expire.getTime() + (hour ? 3600000 * hour : 30 * 24 * 60 * 60 * 1000));
          document.cookie = name + "=" + value + "; expires=" + expire.toGMTString() + "; path=" + (path ? path : "/") + "; " + (domain ? ("domain=" + domain + ";") : "")
      },
      del: function(name, domain, path) {
          document.cookie = name + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (path ? path : "/") + "; " + (domain ? ("domain=" + domain + ";") : "")
      }
  };

  export default
  {
    cookie,
  }
</script>
