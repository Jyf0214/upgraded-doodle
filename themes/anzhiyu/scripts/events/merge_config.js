hexo.extend.filter.register(
  "before_generate",
  () => {
    const defaultConfig = {
      nav: {
        travelling: true,
        clock: false,
      },
      menu: null,
      highlight_theme: "light",
      highlight_copy: true,
      highlight_lang: true,
      highlight_shrink: false,
      highlight_height_limit: false,
      code_word_wrap: false,
      social: null,
      favicon: "/favicon.ico",
      avatar: {
        img: "https://amiya.giize.com/img/logo.svg",
        effect: false,
      },
      disable_top_img: false,
      index_img: null,
      default_top_img: null,
      archive_img: null,
      tag_img: null,
      tag_per_img: null,
      category_img: null,
      category_per_img: null,
      cover: {
        index_enable: true,
        aside_enable: true,
        archives_enable: true,
        position: "left",
        default_cover: null,
      },
      error_img: {
        flink: "/img/friend_404.gif",
        post_page: "/img/404.jpg",
      },
      error_404: {
        enable: true,
        subtitle: "请尝试站内搜索寻找文章",
        background: "https://bu.dusays.com/2023/05/08/645907596997d.gif",
      },
      post_meta: {
        page: {
          date_type: "created",
          date_format: "simple",
          categories: true,
          tags: true,
          label: false,
        },
        post: {
          date_type: "both",
          date_format: "date",
          categories: true,
          tags: true,
          label: true,
          unread: false,
        },
      },
      index_post_content: {
        method: 3,
        length: 500,
      },
      anchor: false,
      photofigcaption: false,
      copy: {
        enable: true,
        copyright: {
          enable: false,
          limit_count: 50,
        },
      },
      toc: {
        post: true,
        page: false,
        number: true,
        expand: false,
        style_simple: false,
      },
      mainTone: {
        enable: false,
        mode: "api",
        api: "https://img2color-go.vercel.app/api?img=",
        cover_change: true,
      },
      post_copyright: {
        enable: true,
        decode: false,
        author_href: null,
        location: "长沙",
        license: "CC BY-NC-SA 4.0",
        license_url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        avatarSinks: false,
        copyright_author_img_back: null,
        copyright_author_img_front: null,
        copyright_author_link: "/",
      },
      reward: {
        enable: false,
        text: null,
        QR_code: null,
      },
      post_edit: {
        enable: true,
        github: false,
        yuque: false,
      },
      related_post: {
        enable: true,
        limit: 6,
        date_type: "created",
      },
      post_pagination: 2,
      noticeOutdate: {
        enable: false,
        style: "flat",
        limit_day: 365,
        position: "top",
        message_prev: "It has been",
        message_next: "days since the last update, the content of the article may be outdated.",
      },
      footer: {
        owner: {
          enable: true,
          since: 2020,
        },
        custom_text: null,
        runtime: {
          enable: false,
          launch_time: "04/01/2021 00:00:00",
          work_img: "https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-上班摸鱼中.svg",
          work_description: "距离月入25k也就还差一个大佬带我~",
          offduty_img: "https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-下班啦.svg",
          offduty_description: "下班了就该开开心心的玩耍，嘿嘿~",
        },
        bdageitem: {
          enable: false,
          list: [
            {
              link: "https://hexo.io/",
              shields: "https://npm.elemecdn.com/anzhiyu-blog@2.1.5/img/badge/Frame-Hexo.svg",
              message: "博客框架为Hexo_v5.4.0",
            },
            {
              link: "https://blog.anheyu.com/",
              shields: "https://npm.elemecdn.com/anzhiyu-theme-static@1.0.9/img/Theme-AnZhiYu-2E67D3.svg",
              message: "本站使用AnZhiYu主题",
            },
          ],
        },
        socialBar: {
          enable: false,
          centerImg: null,
          left: null,
          right: null,
        },
        list: {
          enable: false,
          randomFriends: 3,
          project: null,
        },
        footerBar: {
          enable: true,
          authorLink: "/",
          cc: {
            enable: false,
            link: "/copyright",
          },
          linkList: [
            {
              link: "https://github.com/anzhiyu-c/hexo-theme-anzhiyu",
              text: "主题",
            },
          ],
          subTitle: {
            enable: false,
            effect: true,
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 50,
            loop: true,
            source: 1,
            sub: null,
          },
        },
      },
      h2Divider: false,
      table_interlaced_discoloration: false,
      article_double_row: true,
      aside: {
        enable: true,
        hide: false,
        button: true,
        mobile: true,
        position: "right",
        display: {
          archive: true,
          tag: true,
          category: true,
        },
        card_author: {
          enable: true,
          description: null,
          name_link: "/",
        },
        card_announcement: {
          enable: false,
          content: "欢迎来看我的博客鸭~",
        },
        card_weixin: {
          enable: true,
          face: "https://bu.dusays.com/2023/01/13/63c02edf44033.png",
          backFace: "",
        },
        card_recent_post: {
          enable: true,
          limit: 5,
          sort: "date",
          sort_order: null,
        },
        card_categories: {
          enable: true,
          limit: 8,
          expand: "none",
          sort_order: null,
        },
        card_tags: {
          enable: true,
          limit: 40,
          color: false,
          orderby: "random",
          order: 1,
          sort_order: null,
          highlightTags: null,
        },
        card_archives: {
          enable: true,
          type: "monthly",
          format: "MMMM YYYY",
          order: -1,
          limit: 8,
          sort_order: null,
        },
        card_webinfo: {
          enable: true,
          post_count: true,
          last_push_date: true,
          sort_order: null,
        },
        card_post_series: {
          enable: false,
          orderBy: "date",
          order: -1,
        },
      },
      busuanzi: {
        site_uv: true,
        site_pv: true,
        page_pv: true,
      },
      runtimeshow: {
        enable: false,
        publish_date: null,
      },
      newest_comments: {
        enable: false,
        sort_order: null,
        limit: 6,
        storage: 10,
        avatar: true,
      },
      translate: {
        enable: false,
        default: "繁",
        defaultEncoding: 2,
        translateDelay: 0,
        msgToTraditionalChinese: "繁",
        msgToSimplifiedChinese: "簡",
        rightMenuMsgToTraditionalChinese: "转为繁体",
        rightMenuMsgToSimplifiedChinese: "转为简体",
      },
      readmode: true,
      centerConsole: {
        enable: true,
        card_tags: {
          enable: true,
          limit: 40,
          color: false,
          sort_order: null,
          highlightTags: null,
        },
        card_archives: {
          enable: true,
          type: "monthly",
          format: "MMMM YYYY",
          order: -1,
          limit: 8,
          sort_order: null,
        },
      },
      darkmode: {
        enable: true,
        button: true,
        autoChangeMode: false,
        start: null,
        end: null,
      },
      rightside_item_order: {
        enable: false,
        hide: null,
        show: null,
      },
      mathjax: {
        enable: false,
        per_page: false,
      },
      katex: {
        enable: false,
        per_page: false,
        hide_scrollbar: true,
      },
      algolia_search: {
        enable: false,
        hits: {
          per_page: 6,
        },
      },
      local_search: {
        enable: false,
        preload: false,
        top_n_per_article: 1,
        unescape: false,
        CDN: null,
      },
      docsearch: {
        enable: false,
        appId: null,
        apiKey: null,
        indexName: null,
        option: null,
      },
      sharejs: {
        enable: true,
        sites: "facebook,twitter,wechat,weibo,qq",
      },
      addtoany: {
        enable: false,
        item: "facebook,twitter,wechat,sina_weibo,facebook_messenger,email,copy_link",
      },
      comments: {
        use: null,
        text: true,
        lazyload: false,
        count: false,
        card_post_count: false,
      },
      valine: {
        appId: null,
        appKey: null,
        avatar: "monsterid",
        serverURLs: null,
        bg: null,
        visitor: false,
        option: null,
      },
      waline: {
        serverURL: null,
        bg: null,
        pageview: false,
        option: null,
      },
      facebook_comments: {
        app_id: null,
        user_id: null,
        pageSize: 10,
        order_by: "social",
        lang: "zh_TW",
      },
      twikoo: {
        envId: null,
        region: null,
        visitor: false,
        option: null,
      },
      artalk: {
        server: null,
        site: null,
        visitor: false,
        option: null,
      },
      chat_btn: false,
      chat_hide_show: false,
      chatra: {
        enable: false,
        id: null,
      },
      tidio: {
        enable: false,
        public_key: null,
      },
      daovoice: {
        enable: false,
        app_id: null,
      },
      crisp: {
        enable: false,
        website_id: null,
      },
      baidu_analytics: null,
      google_analytics: null,
      cloudflare_analytics: null,
      microsoft_clarity: null,
      google_adsense: {
        enable: false,
        auto_ads: true,
        js: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        client: null,
        enable_page_level_ads: true,
      },
      site_verification: null,
      index_site_info_top: null,
      index_top_img_height: null,
      category_ui: null,
      tag_ui: null,
      text_align_justify: false,
      background: null,
      footer_bg: false,
      mask: {
        header: true,
        footer: true,
      },
      rightside_bottom: null,
      enter_transitions: true,
      activate_power_mode: {
        enable: false,
        colorful: true,
        shake: true,
        mobile: false,
      },
      canvas_ribbon: {
        enable: false,
        size: 150,
        alpha: 0.6,
        zIndex: -1,
        click_to_change: false,
        mobile: false,
      },
      canvas_fluttering_ribbon: {
        enable: false,
        mobile: false,
      },
      canvas_nest: {
        enable: false,
        color: "0,0,255",
        opacity: 0.7,
        zIndex: -1,
        count: 99,
        mobile: false,
      },
      fireworks: {
        enable: false,
        zIndex: 9999,
        mobile: false,
      },
      click_heart: {
        enable: false,
        mobile: false,
      },
      clickShowText: {
        enable: false,
        text: null,
        fontSize: "15px",
        random: false,
        mobile: false,
      },
      display_mode: "light",
      beautify: {
        enable: false,
        field: "post",
        "title-prefix-icon": null,
        "title-prefix-icon-color": null,
      },
      font: {
        "global-font-size": null,
        "code-font-size": null,
        "font-family": null,
        "code-font-family": null,
      },
      blog_title_font: {
        font_link: null,
        "font-family": null,
      },
      hr_icon: {
        enable: true,
        icon: null,
        "icon-top": null,
      },
      subtitle: {
        enable: false,
        effect: true,
        typed_option: null,
        source: false,
        sub: null,
      },
      preloader: {
        enable: false,
        source: 1,
        pace_css_url: null,
      },
      wordcount: {
        enable: false,
        post_wordcount: true,
        min2read: true,
        total_wordcount: true,
      },
      medium_zoom: false,
      fancybox: true,
      series: {
        enable: true,
        orderBy: "title",
        order: 1,
        number: true,
      },
      abcjs: {
        enable: false,
        per_page: true,
      },
      mermaid: {
        enable: false,
        theme: {
          light: "default",
          dark: "dark",
        },
      },
      note: {
        style: "flat",
        icons: true,
        border_radius: 3,
        light_bg_offset: 0,
      },
      pjax: {
        enable: true,
        exclude: null,
      },
      universe: {
        enable: true,
      },
      bubble: {
        enable: false,
      },
      LA: {
        enable: false,
        ck: null,
        LingQueMonitorID: null,
      },
      diytitle: {
        enable: true,
        leaveTitle: "w(ﾟДﾟ)w 不要走！再看看嘛！",
        backTitle: "♪(^∇^*)欢迎肥来！",
      },
      comment_barrage_config: {
        enable: false,
        maxBarrage: 1,
        barrageTime: 4000,
        accessToken: "",
        mailMd5: "",
      },
      nav_music: {
        enable: true,
        console_widescreen_music: false,
        id: 8152976493,
        server: "netease",
        all_playlist: "https://y.qq.com/n/ryqq/playlist/8802438608",
      },
      visitorMail: {
        enable: true,
        mail: "",
      },
      ptool: {
        enable: true,
        share_mobile: true,
        share_weibo: true,
        share_copyurl: true,
        categories: false,
        mode: null,
      },
      greetingBox: {
        enable: false,
        default: "晚上好👋",
        list: null,
      },
      post_head_ai_description: {
        enable: true,
        gptName: "AnZhiYu",
        mode: "local",
        switchBtn: false,
        btnLink: "https://afdian.net/item/886a79d4db6711eda42a52540025c377",
        randomNum: 3,
        basicWordCount: 1000,
        key: null,
        Referer: null,
      },
      accesskey: {
        enable: true,
      },
      linkPageTop: {
        enable: false,
        title: "与数百名博主无限进步",
        addFriendPlaceholder:
          "昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n站点截图（可选）：\n",
      },
      pageThumbnailSuffix: null,
      agreementPopup: {
        enable: false,
        url: "/privacy",
      },
      rightClickMenu: { enable: false },
      peoplecanvas: {
        enable: true,
        img: "https://upload-bbs.miyoushe.com/upload/2023/09/03/125766904/ee23df8517f3c3e3efc4145658269c06_5714860933110284659.png",
      },
      dynamicEffect: {
        postTopWave: true,
        postTopRollZoomInfo: false,
        pageCommentsRollZoom: false,
      },
      shortcutKey: {
        enable: false,
        delay: 100,
        shiftDelay: 200,
      },
      console: {
        enable: true,
      },
      aplayerInject: {
        enable: false,
        per_page: true,
      },
      snackbar: {
        enable: false,
        position: "bottom-left",
        bg_light: "#49b1f5",
        bg_dark: "#1f1f1f",
      },
      instantpage: false,
      pangu: {
        enable: false,
        field: "site",
      },
      lazyload: {
        enable: false,
        field: "site",
        placeholder: null,
        blur: false,
      },
      Open_Graph_meta: {
        enable: true,
        option: null,
      },
      css_prefix: true,
      inject: {
        head: null,
        bottom: null,
      },
      CDN: {
        internal_provider: "local",
        third_party_provider: "cbd",
        version: true,
        custom_format: null,
        option: null,
      },
    };

    hexo.theme.config = Object.assign(defaultConfig, hexo.theme.config);
  },
  1
);
