
function $$quaintDisqusInstall(config) {
    disqus_config = function () {
        this.page.url = config.url;
        this.page.identifier = config.identifier;
        this.page.title = config.title;
    }
    var d = document, s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//' + config.shortname + '.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
}
