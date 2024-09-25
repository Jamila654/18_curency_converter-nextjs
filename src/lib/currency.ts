export type Currency = 
  | "AED"  // United Arab Emirates Dirham
  | "AFN"  // Afghan Afghani
  | "ALL"  // Albanian Lek
  | "AMD"  // Armenian Dram
  | "ANG"  // Netherlands Antillean Guilder
  | "AOA"  // Angolan Kwanza
  | "ARS"  // Argentine Peso
  | "AUD"  // Australian Dollar
  | "AWG"  // Aruban Florin
  | "AZN"  // Azerbaijani Manat
  | "BAM"  // Bosnia and Herzegovina Convertible Mark
  | "BBD"  // Barbadian Dollar
  | "BDT"  // Bangladeshi Taka
  | "BGN"  // Bulgarian Lev
  | "BHD"  // Bahraini Dinar
  | "BIF"  // Burundian Franc
  | "BMD"  // Bermudian Dollar
  | "BND"  // Brunei Dollar
  | "BOB"  // Bolivian Boliviano
  | "BRL"  // Brazilian Real
  | "BSD"  // Bahamian Dollar
  | "BTN"  // Bhutanese Ngultrum
  | "BWP"  // Botswana Pula
  | "BYN"  // Belarusian Ruble
  | "BZD"  // Belize Dollar
  | "CAD"  // Canadian Dollar
  | "CDF"  // Congolese Franc
  | "CHF"  // Swiss Franc
  | "CLP"  // Chilean Peso
  | "CNY"  // Chinese Yuan
  | "COP"  // Colombian Peso
  | "CRC"  // Costa Rican Colón
  | "CUP"  // Cuban Peso
  | "CVE"  // Cape Verdean Escudo
  | "CZK"  // Czech Koruna
  | "DKK"  // Danish Krone
  | "DOP"  // Dominican Peso
  | "DZD"  // Algerian Dinar
  | "EGP"  // Egyptian Pound
  | "ERN"  // Eritrean Nakfa
  | "ETB"  // Ethiopian Birr
  | "EUR"  // Euro
  | "FJD"  // Fijian Dollar
  | "FKP"  // Falkland Islands Pound
  | "FOK"  // Faroese Króna
  | "GBP"  // British Pound Sterling
  | "GEL"  // Georgian Lari
  | "GGP"  // Guernsey Pound
  | "GHS"  // Ghanaian Cedi
  | "GMD"  // Gambian Dalasi
  | "GNF"  // Guinean Franc
  | "GTQ"  // Guatemalan Quetzal
  | "GYD"  // Guyanese Dollar
  | "HKD"  // Hong Kong Dollar
  | "HNL"  // Honduran Lempira
  | "HRK"  // Croatian Kuna
  | "HTG"  // Haitian Gourde
  | "HUF"  // Hungarian Forint
  | "IDR"  // Indonesian Rupiah
  | "ILS"  // Israeli New Shekel
  | "IMP"  // Isle of Man Pound
  | "INR"  // Indian Rupee
  | "IQD"  // Iraqi Dinar
  | "IRR"  // Iranian Rial
  | "ISK"  // Icelandic Króna
  | "JEP"  // Jersey Pound
  | "JMD"  // Jamaican Dollar
  | "JPY"  // Japanese Yen
  | "KES"  // Kenyan Shilling
  | "KGS"  // Kyrgyzstani Som
  | "KHR"  // Cambodian Riel
  | "KPW"  // North Korean Won
  | "KRW"  // South Korean Won
  | "KWD"  // Kuwaiti Dinar
  | "KYD"  // Cayman Islands Dollar
  | "KZT"  // Kazakhstani Tenge
  | "LAK"  // Laotian Kip
  | "LBP"  // Lebanese Pound
  | "LKR"  // Sri Lankan Rupee
  | "LRD"  // Liberian Dollar
  | "LSL"  // Lesotho Loti
  | "LYD"  // Libyan Dinar
  | "MAD"  // Moroccan Dirham
  | "MDL"  // Moldovan Leu
  | "MGA"  // Malagasy Ariary
  | "MKD"  // Macedonian Denar
  | "MMK"  // Myanmar Kyat
  | "MNT"  // Mongolian Tögrög
  | "MOP"  // Macanese Pataca
  | "MRU"  // Mauritanian Ouguiya
  | "MUR"  // Mauritian Rupee
  | "MVR"  // Maldivian Rufiyaa
  | "MWK"  // Malawian Kwacha
  | "MXN"  // Mexican Peso
  | "MYR"  // Malaysian Ringgit
  | "MZN"  // Mozambican Metical
  | "NAD"  // Namibian Dollar
  | "NGN"  // Nigerian Naira
  | "NIO"  // Nicaraguan Córdoba
  | "NOK"  // Norwegian Krone
  | "NZD"  // New Zealand Dollar
  | "OMR"  // Omani Rial
  | "PAB"  // Panamanian Balboa
  | "Pen"  // Peruvian Sol
  | "PGK"  // Papua New Guinean Kina
  | "PHP"  // Philippine Peso
  | "PKR"  // Pakistani Rupee
  | "PLN"  // Polish Zloty
  | "PYG"  // Paraguayan Guarani
  | "QAR"  // Qatari Rial
  | "RON"  // Romanian Leu
  | "RSD"  // Serbian Dinar
  | "RUB"  // Russian Ruble
  | "RWF"  // Rwandan Franc
  | "SAR"  // Saudi Riyal
  | "SBD"  // Solomon Islands Dollar
  | "SCR"  // Seychellois Rupee
  | "SDG"  // Sudanese Pound
  | "SEK"  // Swedish Krona
  | "SGD"  // Singapore Dollar
  | "SHP"  // Saint Helena Pound
  | "SLL"  // Sierra Leonean Leone
  | "SOS"  // Somali Shilling
  | "SRD"  // Surinamese Dollar
  | "SSP"  // South Sudanese Pound
  | "STN"  // São Tomé and Príncipe Dobra
  | "SVC"  // Salvadoran Colón
  | "SZL"  // Swazi Lilangeni
  | "THB"  // Thai Baht
  | "TJS"  // Tajikistani Somoni
  | "TMT"  // Turkmenistani Manat
  | "TND"  // Tunisian Dinar
  | "TOP"  // Tongan Paʻanga
  | "TRY"  // Turkish Lira
  | "TTD"  // Trinidad and Tobago Dollar
  | "TWD"  // New Taiwan Dollar
  | "TZS"  // Tanzanian Shilling
  | "UAH"  // Ukrainian Hryvnia
  | "UGX"  // Ugandan Shilling
  | "USD"  // United States Dollar
  | "UYU"  // Uruguayan Peso
  | "UZS"  // Uzbekistani Som
  | "VES"  // Venezuelan Bolívar
  | "VND"  // Vietnamese Dong
  | "VUV"  // Vanuatu Vatu
  | "WST"  // Samoan Tala
  | "XAF"  // Central African CFA Franc
  | "XCD"  // East Caribbean Dollar
  | "XOF"  // West African CFA Franc
  | "XPF"  // CFP Franc
  | "YER"  // Yemeni Rial
  | "ZAR"  // South African Rand
  | "ZMW"  // Zambian Kwacha
  | "ZWL"; // Zimbabwean Dollar

export const currencies: Currency[] = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NZD",
  "OMR",
  "PAB",
  "Pen",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SVC",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL"
];

export const currencyFlags: { [key in Currency]: string } = {
  AED: "https://flagcdn.com/ae.svg",
  AFN: "https://flagcdn.com/af.svg",
  ALL: "https://flagcdn.com/al.svg",
  AMD: "https://flagcdn.com/am.svg",
  ANG: "https://flagcdn.com/aw.svg",
  AOA: "https://flagcdn.com/ao.svg",
  ARS: "https://flagcdn.com/ar.svg",
  AUD: "https://flagcdn.com/au.svg",
  AWG: "https://flagcdn.com/aw.svg",
  AZN: "https://flagcdn.com/az.svg",
  BAM: "https://flagcdn.com/ba.svg",
  BBD: "https://flagcdn.com/bb.svg",
  BDT: "https://flagcdn.com/bd.svg",
  BGN: "https://flagcdn.com/bg.svg",
  BHD: "https://flagcdn.com/bh.svg",
  BIF: "https://flagcdn.com/bi.svg",
  BMD: "https://flagcdn.com/bm.svg",
  BND: "https://flagcdn.com/bn.svg",
  BOB: "https://flagcdn.com/bo.svg",
  BRL: "https://flagcdn.com/br.svg",
  BSD: "https://flagcdn.com/bs.svg",
  BTN: "https://flagcdn.com/bt.svg",
  BWP: "https://flagcdn.com/bw.svg",
  BYN: "https://flagcdn.com/by.svg",
  BZD: "https://flagcdn.com/bz.svg",
  CAD: "https://flagcdn.com/ca.svg",
  CDF: "https://flagcdn.com/cd.svg",
  CHF: "https://flagcdn.com/ch.svg",
  CLP: "https://flagcdn.com/cl.svg",
  CNY: "https://flagcdn.com/cn.svg",
  COP: "https://flagcdn.com/co.svg",
  CRC: "https://flagcdn.com/cr.svg",
  CUP: "https://flagcdn.com/cu.svg",
  CVE: "https://flagcdn.com/cv.svg",
  CZK: "https://flagcdn.com/cz.svg",
  DKK: "https://flagcdn.com/dk.svg",
  DOP: "https://flagcdn.com/do.svg",
  DZD: "https://flagcdn.com/dz.svg",
  EGP: "https://flagcdn.com/eg.svg",
  ERN: "https://flagcdn.com/er.svg",
  ETB: "https://flagcdn.com/et.svg",
  EUR: "https://flagcdn.com/eu.svg",
  FJD: "https://flagcdn.com/fj.svg",
  FKP: "https://flagcdn.com/fk.svg",
  FOK: "https://flagcdn.com/fo.svg",
  GBP: "https://flagcdn.com/gb.svg",
  GEL: "https://flagcdn.com/ge.svg",
  GGP: "https://flagcdn.com/gg.svg",
  GHS: "https://flagcdn.com/gh.svg",
  GMD: "https://flagcdn.com/gm.svg",
  GNF: "https://flagcdn.com/gn.svg",
  GTQ: "https://flagcdn.com/gt.svg",
  GYD: "https://flagcdn.com/gy.svg",
  HKD: "https://flagcdn.com/hk.svg",
  HNL: "https://flagcdn.com/hn.svg",
  HRK: "https://flagcdn.com/hr.svg",
  HTG: "https://flagcdn.com/ht.svg",
  HUF: "https://flagcdn.com/hu.svg",
  IDR: "https://flagcdn.com/id.svg",
  ILS: "https://flagcdn.com/il.svg",
  IMP: "https://flagcdn.com/im.svg",
  INR: "https://flagcdn.com/in.svg",
  IQD: "https://flagcdn.com/iq.svg",
  IRR: "https://flagcdn.com/ir.svg",
  ISK: "https://flagcdn.com/is.svg",
  JEP: "https://flagcdn.com/je.svg",
  JMD: "https://flagcdn.com/jm.svg",
  JPY: "https://flagcdn.com/jp.svg",
  KES: "https://flagcdn.com/ke.svg",
  KGS: "https://flagcdn.com/kg.svg",
  KHR: "https://flagcdn.com/kh.svg",
  KPW: "https://flagcdn.com/kp.svg",
  KRW: "https://flagcdn.com/kr.svg",
  KWD: "https://flagcdn.com/kw.svg",
  KYD: "https://flagcdn.com/ky.svg",
  KZT: "https://flagcdn.com/kz.svg",
  LAK: "https://flagcdn.com/la.svg",
  LBP: "https://flagcdn.com/lb.svg",
  LKR: "https://flagcdn.com/lk.svg",
  LRD: "https://flagcdn.com/lr.svg",
  LSL: "https://flagcdn.com/ls.svg",
  LYD: "https://flagcdn.com/ly.svg",
  MAD: "https://flagcdn.com/ma.svg",
  MDL: "https://flagcdn.com/md.svg",
  MGA: "https://flagcdn.com/mg.svg",
  MKD: "https://flagcdn.com/mk.svg",
  MMK: "https://flagcdn.com/mm.svg",
  MNT: "https://flagcdn.com/mn.svg",
  MOP: "https://flagcdn.com/mo.svg",
  MRU: "https://flagcdn.com/mr.svg",
  MUR: "https://flagcdn.com/mu.svg",
  MVR: "https://flagcdn.com/mv.svg",
  MWK: "https://flagcdn.com/mw.svg",
  MXN: "https://flagcdn.com/mx.svg",
  MYR: "https://flagcdn.com/my.svg",
  MZN: "https://flagcdn.com/mz.svg",
  NAD: "https://flagcdn.com/na.svg",
  NGN: "https://flagcdn.com/ng.svg",
  NIO: "https://flagcdn.com/ni.svg",
  NOK: "https://flagcdn.com/no.svg",
  NZD: "https://flagcdn.com/nz.svg",
  OMR: "https://flagcdn.com/om.svg",
  PAB: "https://flagcdn.com/pa.svg",
  Pen: "https://flagcdn.com/pe.svg",
  PGK: "https://flagcdn.com/pg.svg",
  PHP: "https://flagcdn.com/ph.svg",
  PKR: "https://flagcdn.com/pk.svg",
  PLN: "https://flagcdn.com/pl.svg",
  PYG: "https://flagcdn.com/py.svg",
  QAR: "https://flagcdn.com/qa.svg",
  RON: "https://flagcdn.com/ro.svg",
  RSD: "https://flagcdn.com/rs.svg",
  RUB: "https://flagcdn.com/ru.svg",
  RWF: "https://flagcdn.com/rw.svg",
  SAR: "https://flagcdn.com/sa.svg",
  SBD: "https://flagcdn.com/sb.svg",
  SCR: "https://flagcdn.com/sc.svg",
  SDG: "https://flagcdn.com/sd.svg",
  SEK: "https://flagcdn.com/se.svg",
  SGD: "https://flagcdn.com/sg.svg",
  SHP: "https://flagcdn.com/sh.svg",
  SLL: "https://flagcdn.com/sl.svg",
  SOS: "https://flagcdn.com/so.svg",
  SRD: "https://flagcdn.com/sr.svg",
  SSP: "https://flagcdn.com/ss.svg",
  STN: "https://flagcdn.com/st.svg",
  SVC: "https://flagcdn.com/sv.svg",
  SZL: "https://flagcdn.com/sz.svg",
  THB: "https://flagcdn.com/th.svg",
  TJS: "https://flagcdn.com/tj.svg",
  TMT: "https://flagcdn.com/tm.svg",
  TND: "https://flagcdn.com/tn.svg",
  TOP: "https://flagcdn.com/to.svg",
  TRY: "https://flagcdn.com/tr.svg",
  TTD: "https://flagcdn.com/tt.svg",
  TWD: "https://flagcdn.com/tw.svg",
  TZS: "https://flagcdn.com/tz.svg",
  UAH: "https://flagcdn.com/ua.svg",
  UGX: "https://flagcdn.com/ug.svg",
  USD: "https://flagcdn.com/us.svg",
  UYU: "https://flagcdn.com/uy.svg",
  UZS: "https://flagcdn.com/uz.svg",
  VES: "https://flagcdn.com/ve.svg",
  VND: "https://flagcdn.com/vn.svg",
  VUV: "https://flagcdn.com/vu.svg",
  WST: "https://flagcdn.com/ws.svg",
  XAF: "https://flagcdn.com/xaf.svg",
  XCD: "https://flagcdn.com/xcd.svg",
  XOF: "https://flagcdn.com/xof.svg",
  XPF: "https://flagcdn.com/xpf.svg",
  YER: "https://flagcdn.com/ye.svg",
  ZAR: "https://flagcdn.com/za.svg",
  ZMW: "https://flagcdn.com/zm.svg",
  ZWL: "https://flagcdn.com/zw.svg",
};
