const server = "http://127.0.0.1:3000";
const serverProxy = "/api"
const user_service = {
  login   : serverProxy + "/dologin",
  signup  : serverProxy + "/dosignup"
}
const country = {
  country_en:JSON.stringify([{"country_hk":"Hong Kong"},{"country_mo":"Macau"},{"country_cn":"China"},{"country_af":"Afghanistan"},{"country_ax":"Aland Islands"},{"country_al":"Albania"},{"country_dz":"Algeria"},{"country_as":"American Samoa"},{"country_ad":"Andorra"},{"country_ao":"Angola"},{"country_ai":"Anguilla"},{"country_aq":"Antarctica"},{"country_ag":"Antigua and Barbuda"},{"country_ar":"Argentina"},{"country_am":"Armenia"},{"country_aw":"Aruba"},{"country_au":"Australia"},{"country_at":"Austria"},{"country_az":"Azerbaijan"},{"country_bs":"Bahamas"},{"country_bh":"Bahrain"},{"country_bd":"Bangladesh"},{"country_bb":"Barbados"},{"country_by":"Belarus"},{"country_be":"Belgium"},{"country_bz":"Belize"},{"country_bj":"Benin"},{"country_bm":"Bermuda"},{"country_bt":"Bhutan"},{"country_bo":"Bolivia"},{"country_bq":"Bonaire, Sint Eustatius and Saba"},{"country_ba":"Bosnia and Herzegovina"},{"country_bw":"Botswana"},{"country_bv":"Bouvet Island"},{"country_br":"Brazil"},{"country_io":"British Indian Ocean Territory"},{"country_vg":"British Virgin Islands"},{"country_bn":"Brunei"},{"country_bg":"Bulgaria"},{"country_bf":"Burkina Faso"},{"country_bi":"Burundi"},{"country_kh":"Cambodia"},{"country_cm":"Cameroon"},{"country_ca":"Canada"},{"country_cv":"Cape Verde"},{"country_ky":"Cayman Islands"},{"country_cf":"Central African Republic"},{"country_td":"Chad"},{"country_cl":"Chile"},{"country_cx":"Christmas Island"},{"country_cc":"Cocos Islands"},{"country_co":"Colombia"},{"country_km":"Comoros"},{"country_cg":"Congo"},{"country_ck":"Cook Islands"},{"country_cr":"Costa Rica"},{"country_hr":"Croatia"},{"country_cu":"Cuba"},{"country_cw":"Curaçao"},{"country_cy":"Cyprus"},{"country_cz":"Czech Republic"},{"country_ci":"Côte d'Ivoire"},{"country_dk":"Denmark"},{"country_dj":"Djibouti"},{"country_dm":"Dominica"},{"country_do":"Dominican Republic"},{"country_ec":"Ecuador"},{"country_eg":"Egypt"},{"country_sv":"El Salvador"},{"country_gq":"Equatorial Guinea"},{"country_er":"Eritrea"},{"country_ee":"Estonia"},{"country_et":"Ethiopia"},{"country_fk":"Falkland Islands"},{"country_fo":"Faroe Islands"},{"country_fj":"Fiji"},{"country_fi":"Finland"},{"country_fr":"France"},{"country_gf":"French Guiana"},{"country_pf":"French Polynesia"},{"country_tf":"French Southern Territories"},{"country_ga":"Gabon"},{"country_gm":"Gambia"},{"country_ge":"Georgia"},{"country_de":"Germany"},{"country_gh":"Ghana"},{"country_gi":"Gibraltar"},{"country_gr":"Greece"},{"country_gl":"Greenland"},{"country_gd":"Grenada"},{"country_gp":"Guadeloupe"},{"country_gu":"Guam"},{"country_gt":"Guatemala"},{"country_gg":"Guernsey"},{"country_gn":"Guinea"},{"country_gw":"Guinea-Bissau"},{"country_gy":"Guyana"},{"country_ht":"Haiti"},{"country_hm":"Heard Island And McDonald Islands"},{"country_hn":"Honduras"},{"country_hu":"Hungary"},{"country_is":"Iceland"},{"country_in":"India"},{"country_id":"Indonesia"},{"country_ir":"Iran"},{"country_iq":"Iraq"},{"country_ie":"Ireland"},{"country_im":"Isle Of Man"},{"country_il":"Israel"},{"country_it":"Italy"},{"country_jm":"Jamaica"},{"country_jp":"Japan"},{"country_je":"Jersey"},{"country_jo":"Jordan"},{"country_kz":"Kazakhstan"},{"country_ke":"Kenya"},{"country_ki":"Kiribati"},{"country_kw":"Kuwait"},{"country_kg":"Kyrgyzstan"},{"country_la":"Laos"},{"country_lv":"Latvia"},{"country_lb":"Lebanon"},{"country_ls":"Lesotho"},{"country_lr":"Liberia"},{"country_ly":"Libya"},{"country_li":"Liechtenstein"},{"country_lt":"Lithuania"},{"country_lu":"Luxembourg"},{"country_mk":"Macedonia"},{"country_mg":"Madagascar"},{"country_mw":"Malawi"},{"country_my":"Malaysia"},{"country_mv":"Maldives"},{"country_ml":"Mali"},{"country_mt":"Malta"},{"country_mh":"Marshall Islands"},{"country_mq":"Martinique"},{"country_mr":"Mauritania"},{"country_mu":"Mauritius"},{"country_yt":"Mayotte"},{"country_mx":"Mexico"},{"country_fm":"Micronesia"},{"country_md":"Moldova"},{"country_mc":"Monaco"},{"country_mn":"Mongolia"},{"country_me":"Montenegro"},{"country_ms":"Montserrat"},{"country_ma":"Morocco"},{"country_mz":"Mozambique"},{"country_mm":"Myanmar"},{"country_na":"Namibia"},{"country_nr":"Nauru"},{"country_np":"Nepal"},{"country_nl":"Netherlands"},{"country_an":"Netherlands Antilles"},{"country_nc":"New Caledonia"},{"country_nz":"New Zealand"},{"country_ni":"Nicaragua"},{"country_ne":"Niger"},{"country_ng":"Nigeria"},{"country_nu":"Niue"},{"country_nf":"Norfolk Island"},{"country_kp":"North Korea"},{"country_mp":"Northern Mariana Islands"},{"country_no":"Norway"},{"country_om":"Oman"},{"country_pk":"Pakistan"},{"country_pw":"Palau"},{"country_ps":"Palestine"},{"country_pa":"Panama"},{"country_pg":"Papua New Guinea"},{"country_py":"Paraguay"},{"country_pe":"Peru"},{"country_ph":"Philippines"},{"country_pn":"Pitcairn"},{"country_pl":"Poland"},{"country_pt":"Portugal"},{"country_pr":"Puerto Rico"},{"country_qa":"Qatar"},{"country_re":"Reunion"},{"country_ro":"Romania"},{"country_ru":"Russia"},{"country_rw":"Rwanda"},{"country_bl":"Saint Barthélemy"},{"country_sh":"Saint Helena"},{"country_kn":"Saint Kitts And Nevis"},{"country_lc":"Saint Lucia"},{"country_mf":"Saint Martin"},{"country_pm":"Saint Pierre And Miquelon"},{"country_vc":"Saint Vincent And The Grenadines"},{"country_ws":"Samoa"},{"country_sm":"San Marino"},{"country_st":"Sao Tome And Principe"},{"country_sa":"Saudi Arabia"},{"country_sn":"Senegal"},{"country_rs":"Serbia"},{"country_sc":"Seychelles"},{"country_sl":"Sierra Leone"},{"country_sg":"Singapore"},{"country_sx":"Sint Maarten (Dutch part)"},{"country_sk":"Slovakia"},{"country_si":"Slovenia"},{"country_sb":"Solomon Islands"},{"country_so":"Somalia"},{"country_za":"South Africa"},{"country_gs":"South Georgia And The South Sandwich Islands"},{"country_kr":"South Korea"},{"country_ss":"South Sudan"},{"country_es":"Spain"},{"country_lk":"Sri Lanka"},{"country_sd":"Sudan"},{"country_sr":"Suriname"},{"country_sj":"Svalbard And Jan Mayen"},{"country_sz":"Swaziland"},{"country_se":"Sweden"},{"country_ch":"Switzerland"},{"country_sy":"Syria"},{"country_tj":"Tajikistan"},{"country_tz":"Tanzania"},{"country_th":"Thailand"},{"country_cd":"The Democratic Republic Of Congo"},{"country_tl":"Timor-Leste"},{"country_tg":"Togo"},{"country_tk":"Tokelau"},{"country_to":"Tonga"},{"country_tt":"Trinidad and Tobago"},{"country_tn":"Tunisia"},{"country_tr":"Turkey"},{"country_tm":"Turkmenistan"},{"country_tc":"Turks And Caicos Islands"},{"country_tv":"Tuvalu"},{"country_tw":"Taiwan"},{"country_vi":"U.S. Virgin Islands"},{"country_ug":"Uganda"},{"country_ua":"Ukraine"},{"country_ae":"United Arab Emirates"},{"country_gb":"United Kingdom"},{"country_us":"United States"},{"country_um":"United States Minor Outlying Islands"},{"country_uy":"Uruguay"},{"country_uz":"Uzbekistan"},{"country_vu":"Vanuatu"},{"country_va":"Vatican"},{"country_ve":"Venezuela"},{"country_vn":"Vietnam"},{"country_wf":"Wallis And Futuna"},{"country_eh":"Western Sahara"},{"country_ye":"Yemen"},{"country_zm":"Zambia"},{"country_zw":"Zimbabwe"}]),
  country_cn:JSON.stringify([{"country_hk":"香港"},{"country_mo":"澳門"},{"country_cn":"中國"},{"country_ad":"安道爾"},{"country_ae":"阿拉伯聯合大公國"},{"country_af":"阿富汗"},{"country_ag":"安地卡及巴布達"},{"country_ai":"安圭拉"},{"country_al":"阿爾巴尼亞"},{"country_am":"亞美尼亞"},{"country_an":"荷屬安替列斯"},{"country_ao":"安哥拉"},{"country_aq":"南極洲"},{"country_ar":"阿根廷"},{"country_as":"美屬薩摩亞"},{"country_at":"奧地利"},{"country_au":"澳大利亞"},{"country_aw":"阿路巴"},{"country_ax":"奧蘭群島"},{"country_az":"亞塞拜然"},{"country_ba":"波士尼亞赫塞哥維納"},{"country_bb":"巴貝多"},{"country_bd":"孟加拉"},{"country_be":"比利時"},{"country_bf":"布吉納法索"},{"country_bg":"保加利亞"},{"country_bh":"巴林"},{"country_bi":"浦隆地"},{"country_bj":"貝南"},{"country_bl":"聖巴瑟米"},{"country_bm":"百慕達"},{"country_bn":"汶萊"},{"country_bo":"玻利維亞"},{"country_bq":"波納爾島、聖艾斯塔得斯島及薩巴島"},{"country_br":"巴西"},{"country_bs":"巴哈馬"},{"country_bt":"不丹"},{"country_bv":"布威島"},{"country_bw":"波札那"},{"country_by":"白俄羅斯"},{"country_bz":"貝里斯"},{"country_ca":"加拿大"},{"country_cc":"可可斯群島"},{"country_cd":"剛果民主共和國"},{"country_cf":"中非"},{"country_cg":"剛果"},{"country_ch":"瑞士"},{"country_ci":"象牙海岸"},{"country_ck":"庫克群島"},{"country_cl":"智利"},{"country_cm":"喀麥隆"},{"country_co":"哥倫比亞"},{"country_cr":"哥斯大黎加"},{"country_cu":"古巴"},{"country_cv":"維德角"},{"country_cw":"古拉果"},{"country_cx":"聖誕島"},{"country_cy":"賽普勒斯"},{"country_cz":"捷克共和國"},{"country_de":"德國"},{"country_dj":"吉布地"},{"country_dk":"丹麥"},{"country_dm":"多米尼克"},{"country_do":"多明尼加"},{"country_dz":"阿爾及利"},{"country_ec":"厄瓜多爾"},{"country_ee":"愛沙尼亞"},{"country_eg":"埃及"},{"country_eh":"西撒哈拉沙漠"},{"country_er":"厄利垂亞"},{"country_es":"西班牙"},{"country_et":"衣索比亞"},{"country_fi":"芬蘭"},{"country_fj":"斐濟"},{"country_fk":"福克蘭群島"},{"country_fm":"密克羅尼西亞聯邦"},{"country_fo":"法魯群島"},{"country_fr":"法國"},{"country_ga":"加彭"},{"country_gb":"英國"},{"country_gd":"格瑞那達"},{"country_ge":"喬治亞"},{"country_gf":"法屬蓋亞納"},{"country_gg":"根西島"},{"country_gh":"迦納"},{"country_gi":"直布羅陀"},{"country_gl":"格陵蘭"},{"country_gm":"甘比亞"},{"country_gn":"幾內亞"},{"country_gp":"格陵蘭"},{"country_gq":"赤道幾內亞"},{"country_gr":"希臘"},{"country_gs":"南喬治亞和南桑威奇群島"},{"country_gt":"瓜地馬拉"},{"country_gu":"關島"},{"country_gw":"比索"},{"country_gy":"蓋亞納"},{"country_hm":"賀得島和麥克唐納群島"},{"country_hn":"宏都拉斯"},{"country_hr":"克羅埃西亞"},{"country_ht":"海地"},{"country_hu":"匈牙利"},{"country_id":"印尼"},{"country_ie":"愛爾蘭"},{"country_il":"以色列"},{"country_im":"曼島"},{"country_in":"印度"},{"country_io":"英屬印度洋地區"},{"country_iq":"伊拉克"},{"country_ir":"伊朗"},{"country_is":"冰島"},{"country_it":"義大利"},{"country_je":"澤西島"},{"country_jm":"牙買"},{"country_jo":"約旦"},{"country_jp":"日本"},{"country_ke":"肯亞"},{"country_kg":"吉爾吉斯"},{"country_kh":"柬埔寨"},{"country_ki":"吉里巴斯"},{"country_km":"葛摩"},{"country_kn":"聖克里斯多福及尼維斯"},{"country_kp":"北韓"},{"country_kr":"南韓"},{"country_kw":"科威特"},{"country_ky":"開曼群島"},{"country_kz":"哈薩克"},{"country_la":"寮國"},{"country_lb":"黎巴嫩"},{"country_lc":"聖露西亞"},{"country_li":"列支敦斯登"},{"country_lk":"斯里蘭卡"},{"country_lr":"賴比瑞亞"},{"country_ls":"賴索托"},{"country_lt":"立陶宛"},{"country_lu":"盧森堡"},{"country_lv":"拉脫維亞"},{"country_ly":"利比亞"},{"country_ma":"摩洛哥"},{"country_mc":"摩納哥"},{"country_md":"摩爾多瓦"},{"country_me":"蒙特尼格羅"},{"country_mf":"聖馬丁"},{"country_mg":"馬達加斯加"},{"country_mh":"馬紹爾群島"},{"country_mk":"馬其頓"},{"country_ml":"馬利"},{"country_mm":"緬甸"},{"country_mn":"蒙古"},{"country_mp":"馬里亞納群島"},{"country_mq":"法屬玻里尼西亞"},{"country_mr":"茅利塔尼亞"},{"country_ms":"蒙特色拉特島"},{"country_mt":"馬爾他"},{"country_mu":"模里西斯"},{"country_mv":"馬爾地夫"},{"country_mw":"馬拉威"},{"country_mx":"墨西哥"},{"country_my":"馬來西亞"},{"country_mz":"莫三比克"},{"country_na":"納米比亞"},{"country_nc":"新喀里多尼亞群島"},{"country_ne":"尼日"},{"country_nf":"諾福克島"},{"country_ng":"奈及利亞"},{"country_ni":"尼加拉瓜"},{"country_nl":"荷蘭"},{"country_no":"挪威"},{"country_np":"尼泊爾"},{"country_nr":"諾魯"},{"country_nu":"紐威島"},{"country_nz":"紐西蘭"},{"country_om":"阿曼"},{"country_pa":"巴拿馬"},{"country_pe":"祕魯共和國"},{"country_pf":"法屬玻里尼西亞"},{"country_pg":"巴布亞紐幾內亞"},{"country_ph":"菲律賓"},{"country_pk":"巴基斯坦"},{"country_pl":"波蘭"},{"country_pm":"聖皮埃爾和密克隆"},{"country_pn":"皮特康"},{"country_pr":"波多黎各"},{"country_ps":"巴勒斯坦"},{"country_pt":"葡萄牙"},{"country_pw":"帛琉"},{"country_py":"巴拉圭"},{"country_qa":"卡達"},{"country_re":"留尼旺島"},{"country_ro":"羅馬尼亞"},{"country_rs":"塞爾維亞"},{"country_ru":"俄羅斯聯邦"},{"country_rw":"盧安達"},{"country_sa":"沙烏地阿拉伯"},{"country_sb":"索羅門群島"},{"country_sc":"塞席爾"},{"country_sd":"蘇丹"},{"country_se":"瑞典"},{"country_sg":"新加坡"},{"country_sh":"聖赫拿勒島"},{"country_si":"斯洛維尼亞"},{"country_sj":"冷岸和央麥恩島"},{"country_sk":"斯洛伐克"},{"country_sl":"獅子山"},{"country_sm":"聖馬力諾"},{"country_sn":"塞內加爾"},{"country_so":"索馬利亞"},{"country_sr":"蘇利南"},{"country_ss":"南蘇丹"},{"country_st":"聖多美"},{"country_sv":"薩爾瓦多"},{"country_sx":"聖馬丁 (荷蘭部分)"},{"country_sy":"敘利亞"},{"country_sz":"史瓦濟蘭"},{"country_tc":"土克斯和開卡斯群島"},{"country_td":"查德"},{"country_tf":"法國南方領地"},{"country_tg":"多哥"},{"country_th":"泰國"},{"country_tj":"塔吉克"},{"country_tk":"托克勞群島"},{"country_tl":"東帝汶"},{"country_tm":"土庫曼"},{"country_tn":"突尼西亞"},{"country_to":"東加"},{"country_tr":"土耳其"},{"country_tt":"千里達及托巴哥"},{"country_tv":"吐瓦魯"},{"country_tw":"台灣"},{"country_tz":"坦尚尼亞"},{"country_ua":"烏克蘭"},{"country_ug":"烏干達"},{"country_um":"美國外島"},{"country_us":"美國"},{"country_uy":"烏拉圭"},{"country_uz":"烏茲別克斯坦"},{"country_va":"梵帝崗"},{"country_vc":"聖文森及格瑞那丁"},{"country_ve":"委內瑞拉"},{"country_vg":"英屬維爾京群島"},{"country_vi":"美屬維爾京群島"},{"country_vn":"越南"},{"country_vu":"萬那杜"},{"country_wf":"沃利斯和富突納"},{"country_ws":"薩摩亞"},{"country_ye":"葉門"},{"country_yt":"馬約特島"},{"country_za":"南非"},{"country_zm":"尚比亞"},{"country_zw":"辛巴威"}]),
  country_hk:JSON.stringify([{"country_hk":"香港"},{"country_mo":"澳门特区"},{"country_cn":"中国"},{"country_ad":"安道尔"},{"country_ae":"阿拉伯联合酋长国"},{"country_af":"阿富汗"},{"country_ag":"安提瓜和巴布达"},{"country_ai":"安圭拉"},{"country_al":"阿尔巴尼亚"},{"country_am":"亚美尼亚"},{"country_an":"荷属安的列斯群岛"},{"country_ao":"安哥拉"},{"country_aq":"南极洲"},{"country_ar":"阿根廷"},{"country_as":"东萨摩亚"},{"country_at":"奥地利"},{"country_au":"澳大利亚"},{"country_aw":"阿鲁巴"},{"country_ax":"奥兰群岛"},{"country_az":"阿塞拜疆"},{"country_ba":"波斯尼亚和黑山共和国"},{"country_bb":"巴巴多斯"},{"country_bd":"孟加拉"},{"country_be":"比利时"},{"country_bf":"布基纳法索"},{"country_bg":"保加利亚"},{"country_bh":"巴林"},{"country_bi":"布隆迪"},{"country_bj":"贝宁"},{"country_bl":"圣巴泰勒米岛"},{"country_bm":"百慕大"},{"country_bn":"文莱"},{"country_bo":"玻利维亚"},{"country_bq":"博奈尔岛, 圣尤斯特歇斯岛和萨巴岛"},{"country_br":"巴西"},{"country_bs":"巴哈马"},{"country_bt":"不丹"},{"country_bv":"布韦岛"},{"country_bw":"博茨瓦纳"},{"country_by":"白俄罗斯"},{"country_bz":"伯里兹"},{"country_ca":"加拿大"},{"country_cc":"科库斯群岛"},{"country_cd":"刚果民主共和国"},{"country_cf":"中非共和国"},{"country_cg":"刚果"},{"country_ch":"瑞士"},{"country_ci":"象牙海岸"},{"country_ck":"库克群岛"},{"country_cl":"智利"},{"country_cm":"喀麦隆"},{"country_co":"哥伦比亚"},{"country_cr":"哥斯达黎加"},{"country_cu":"古巴"},{"country_cv":"佛得角"},{"country_cw":"库拉索岛"},{"country_cx":"圣诞岛"},{"country_cy":"塞浦路斯"},{"country_cz":"捷克共和国"},{"country_de":"德国"},{"country_dj":"吉布提"},{"country_dk":"丹麦"},{"country_dm":"多米尼加联邦"},{"country_do":"多米尼加共和国"},{"country_dz":"阿尔及利亚"},{"country_ec":"厄瓜多尔"},{"country_ee":"爱沙尼亚"},{"country_eg":"埃及"},{"country_eh":"西撒哈拉"},{"country_er":"厄里特尼亚"},{"country_es":"西班牙"},{"country_et":"埃塞俄比亚"},{"country_fi":"芬兰"},{"country_fj":"斐济"},{"country_fk":"富克兰群岛"},{"country_fm":"密克罗尼西亚"},{"country_fo":"法罗群岛"},{"country_fr":"法国"},{"country_ga":"加蓬"},{"country_gb":"英国"},{"country_gd":"格林纳达"},{"country_ge":"格鲁吉亚"},{"country_gf":"法属圭亚那"},{"country_gg":"格恩西岛"},{"country_gh":"加纳"},{"country_gi":"直布罗陀"},{"country_gl":"格陵兰"},{"country_gm":"冈比亚"},{"country_gn":"几内亚"},{"country_gp":"瓜德罗普岛"},{"country_gq":"赤道几内亚"},{"country_gr":"希腊"},{"country_gs":"南乔治亚岛和南桑德韦奇岛"},{"country_gt":"危地马拉"},{"country_gu":"关岛"},{"country_gw":"几内亚比绍共和国"},{"country_gy":"圭亚那"},{"country_hm":"赫德和麦克唐纳群岛"},{"country_hn":"洪都拉斯"},{"country_hr":"克罗地亚"},{"country_ht":"海地"},{"country_hu":"匈牙利"},{"country_id":"印度尼西亚"},{"country_ie":"爱尔兰"},{"country_il":"以色列"},{"country_im":"曼岛"},{"country_in":"印度"},{"country_io":"英属印度洋领地"},{"country_iq":"伊拉克"},{"country_ir":"伊朗"},{"country_is":"冰岛"},{"country_it":"意大利"},{"country_je":"泽西岛"},{"country_jm":"牙买加"},{"country_jo":"约旦"},{"country_jp":"日本"},{"country_ke":"肯尼亚"},{"country_kg":"吉尔吉克斯坦"},{"country_kh":"柬埔寨"},{"country_ki":"基里巴斯"},{"country_km":"科摩罗"},{"country_kn":"圣基茨和尼维斯"},{"country_kp":"朝鲜"},{"country_kr":"韩国"},{"country_kw":"科威特"},{"country_ky":"开曼群岛"},{"country_kz":"哈萨克斯坦"},{"country_la":"老挝"},{"country_lb":"黎巴嫩"},{"country_lc":"圣卢西亚"},{"country_li":"列支敦士登"},{"country_lk":"斯里兰卡"},{"country_lr":"利比里亚"},{"country_ls":"莱索托"},{"country_lt":"立陶宛"},{"country_lu":"卢森堡"},{"country_lv":"拉脱维亚"},{"country_ly":"利比亚"},{"country_ma":"摩洛哥"},{"country_mc":"摩纳哥"},{"country_md":"摩尔多瓦"},{"country_me":"黑山"},{"country_mf":"圣马丁"},{"country_mg":"马达加斯加"},{"country_mh":"马绍尔群岛"},{"country_mk":"马其顿王国"},{"country_ml":"马里"},{"country_mm":"缅甸"},{"country_mn":"蒙古"},{"country_mp":"美属北马里亚纳群岛"},{"country_mq":"马提尼克岛"},{"country_mr":"毛里塔尼亚"},{"country_ms":"蒙特塞拉群岛"},{"country_mt":"马耳他"},{"country_mu":"毛里求斯"},{"country_mv":"马尔代夫"},{"country_mw":"马拉维"},{"country_mx":"墨西哥"},{"country_my":"马来西亚"},{"country_mz":"莫桑比克"},{"country_na":"纳米比亚"},{"country_nc":"新克里多尼亚群岛"},{"country_ne":"尼日尔"},{"country_nf":"诺福克岛"},{"country_ng":"尼日利亚"},{"country_ni":"尼加拉瓜"},{"country_nl":"荷兰"},{"country_no":"挪威"},{"country_np":"尼泊尔"},{"country_nr":"瑙鲁"},{"country_nu":"纽埃岛"},{"country_nz":"新西兰"},{"country_om":"阿曼"},{"country_pa":"巴拿马"},{"country_pe":"秘鲁"},{"country_pf":"法属玻利尼西亚"},{"country_pg":"巴布亚新几内亚"},{"country_ph":"菲律宾"},{"country_pk":"巴基斯坦"},{"country_pl":"波兰"},{"country_pm":"圣皮埃尔和密克隆群岛"},{"country_pn":"皮特克恩岛"},{"country_pr":"波多黎哥"},{"country_ps":"巴勒斯坦"},{"country_pt":"葡萄牙"},{"country_pw":"帕劳"},{"country_py":"巴拉圭"},{"country_qa":"卡塔尔"},{"country_re":"留尼汪岛"},{"country_ro":"罗马尼亚"},{"country_rs":"塞尔维亚"},{"country_ru":"俄罗斯"},{"country_rw":"卢旺达"},{"country_sa":"沙特阿拉伯"},{"country_sb":"所罗门群岛"},{"country_sc":"塞舌尔群岛"},{"country_sd":"苏丹"},{"country_se":"瑞典"},{"country_sg":"新加坡"},{"country_sh":"圣赫勒拿岛"},{"country_si":"斯洛文尼亚"},{"country_sj":"斯瓦尔巴特和扬马延岛"},{"country_sk":"斯洛伐克"},{"country_sl":"塞拉里昂"},{"country_sm":"圣马力诺"},{"country_sn":"塞内加尔"},{"country_so":"索马里"},{"country_sr":"苏里南"},{"country_ss":"南苏丹"},{"country_st":"圣多美和普林西比"},{"country_sv":"萨尔瓦多"},{"country_sx":"荷属圣马丁岛"},{"country_sy":"叙利亚"},{"country_sz":"斯威士兰"},{"country_tc":"特克斯群岛和凯科斯群岛"},{"country_td":"乍得"},{"country_tf":"法属南特立尼达"},{"country_tg":"多哥"},{"country_th":"泰国"},{"country_tj":"塔吉克斯坦"},{"country_tk":"联合群岛"},{"country_tl":"东帝汶"},{"country_tm":"土库曼斯坦"},{"country_tn":"突尼斯"},{"country_to":"汤加"},{"country_tr":"土耳其"},{"country_tt":"特立尼达和多巴哥"},{"country_tv":"图瓦卢"},{"country_tw":"台湾地区"},{"country_tz":"坦桑尼亚"},{"country_ua":"乌克兰"},{"country_ug":"乌干达"},{"country_um":"美属小奥特兰群岛"},{"country_us":"美国"},{"country_uy":"乌拉圭"},{"country_uz":"乌兹别克斯坦"},{"country_va":"梵蒂冈"},{"country_vc":"圣文森特和格林纳丁斯"},{"country_ve":"委内瑞拉"},{"country_vg":"英属维京群岛"},{"country_vi":"美属维京群岛"},{"country_vn":"越南"},{"country_vu":"瓦努阿图"},{"country_wf":"瓦利斯群岛和富图纳群岛"},{"country_ws":"东萨摩亚"},{"country_ye":"也门"},{"country_yt":"马约特岛"},{"country_za":"南非"},{"country_zm":"赞比亚"},{"country_zw":"津巴布韦"}])
}

export default {
  user_service
}

