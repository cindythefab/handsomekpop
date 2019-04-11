dataSetVersion = "2019-04-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "IDOLS", tooltip: "01 - KPOP", key: "IDOL" }
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Lee Know",
    img: "MokrZjD.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Eunwoo",
    img: "i23mJfL.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Yunho",
    img: "9Hy3OM9.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Winwin",
    img: "Juxac23.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Younghoon",
    img: "mC6wSBG.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Xiumin",
    img: "dx9D42A.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yanan",
    img: "yhOXit8.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yuta",
    img: "nmsj2g0.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Wonho",
    img: "foeIV0x.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Wooyoung",
    img: "p0OakHV.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Rowoon",
    img: "G9aqCcj.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "San",
    img: "YelbhDG.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Onew",
    img: "FlxKoVM.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Taeyong",
    img: "mfBCVeG.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Luhan",
    img: "29b8zGN.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Lucas",
    img: "lGE9YRp.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Sehun",
    img: "Vfmip9l.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Lay",
    img: "Ax5b46D.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jinyoung",
    img: "2roL68a.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "JB",
    img: "AQrlBR3.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Jinho",
    img: "vvlneTW.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jaemin",
    img: "f8fW1ZZ.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Hyungwon",
    img: "8Nf3Fa1.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jackson",
    img: "52C0CmC.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hyuck",
    img: "Sg0zCL4.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Tao",
    img: "y2AyAOo.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jaehyun",
    img: "yxaZfgs.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Chanyeol",
    img: "HXjV6Mv.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Donghan",
    img: "Xze6lrr.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Minho",
    img: "a0U9W4I.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Kwonbin",
    img: "QVFUYHZ.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Wooseok",
    img: "rP3C11h.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Kang Daniel",
    img: "ilC7oZL.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Baekhyun",
    img: "6T91Vgt.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Gikwang",
    img: "h2SiLui.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Dawon",
    img: "0karCSu.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
   {
    name: "Minhyuk",
    img: "XBSK64e.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
   {
    name: "Hongseok",
    img: "0Mu1Aqg.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
   {
    name: "Mingyu",
    img: "hT6YfdV.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
   {
    name: "Bambam",
    img: "uc27OIW.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  }
];
