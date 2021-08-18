export const revenueChart = {
  chart: {
    type: "area",
    fontFamily: "inherit",
    height: 40.0,
    sparkline: {
      enabled: true,
    },
    animations: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 0.16,
    type: "solid",
  },
  stroke: {
    width: 2,
    lineCap: "round",
    curve: "smooth",
  },
  series: [
    {
      name: "Profits",
      data: [
        37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
        46, 39, 62, 51, 35, 41, 67,
      ],
    },
  ],
  grid: {
    strokeDashArray: 4,
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    type: "datetime",
  },
  yaxis: {
    labels: {
      padding: 4,
    },
  },
  labels: [
    "2020-06-20",
    "2020-06-21",
    "2020-06-22",
    "2020-06-23",
    "2020-06-24",
    "2020-06-25",
    "2020-06-26",
    "2020-06-27",
    "2020-06-28",
    "2020-06-29",
    "2020-06-30",
    "2020-07-01",
    "2020-07-02",
    "2020-07-03",
    "2020-07-04",
    "2020-07-05",
    "2020-07-06",
    "2020-07-07",
    "2020-07-08",
    "2020-07-09",
    "2020-07-10",
    "2020-07-11",
    "2020-07-12",
    "2020-07-13",
    "2020-07-14",
    "2020-07-15",
    "2020-07-16",
    "2020-07-17",
    "2020-07-18",
    "2020-07-19",
  ],
  colors: ["#206bc4"],
  legend: {
    show: false,
  },
};

export const newClientsChart = {
  chart: {
    type: "line",
    fontFamily: "inherit",
    height: 40.0,
    sparkline: {
      enabled: true,
    },
    animations: {
      enabled: false,
    },
  },
  fill: {
    opacity: 1,
  },
  stroke: {
    width: [2, 1],
    dashArray: [0, 3],
    lineCap: "round",
    curve: "smooth",
  },
  series: [
    {
      name: "May",
      data: [
        37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 4,
        46, 39, 62, 51, 35, 41, 67,
      ],
    },
    {
      name: "April",
      data: [
        93, 54, 51, 24, 35, 35, 31, 67, 19, 43, 28, 36, 62, 61, 27, 39, 35, 41, 27, 35, 51, 46, 62,
        37, 44, 53, 41, 65, 39, 37,
      ],
    },
  ],
  grid: {
    strokeDashArray: 4,
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
    type: "datetime",
  },
  yaxis: {
    labels: {
      padding: 4,
    },
  },
  labels: [
    "2020-06-20",
    "2020-06-21",
    "2020-06-22",
    "2020-06-23",
    "2020-06-24",
    "2020-06-25",
    "2020-06-26",
    "2020-06-27",
    "2020-06-28",
    "2020-06-29",
    "2020-06-30",
    "2020-07-01",
    "2020-07-02",
    "2020-07-03",
    "2020-07-04",
    "2020-07-05",
    "2020-07-06",
    "2020-07-07",
    "2020-07-08",
    "2020-07-09",
    "2020-07-10",
    "2020-07-11",
    "2020-07-12",
    "2020-07-13",
    "2020-07-14",
    "2020-07-15",
    "2020-07-16",
    "2020-07-17",
    "2020-07-18",
    "2020-07-19",
  ],
  colors: ["#206bc4", "#a8aeb7"],
  legend: {
    show: false,
  },
};

export const activeUserChart = {
  chart: {
    type: "bar",
    fontFamily: "inherit",
    height: 40.0,
    sparkline: {
      enabled: true,
    },
    animations: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: "Profits",
      data: [
        37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
        46, 39, 62, 51, 35, 41, 67,
      ],
    },
  ],
  grid: {
    strokeDashArray: 4,
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    type: "datetime",
  },
  yaxis: {
    labels: {
      padding: 4,
    },
  },
  labels: [
    "2020-06-20",
    "2020-06-21",
    "2020-06-22",
    "2020-06-23",
    "2020-06-24",
    "2020-06-25",
    "2020-06-26",
    "2020-06-27",
    "2020-06-28",
    "2020-06-29",
    "2020-06-30",
    "2020-07-01",
    "2020-07-02",
    "2020-07-03",
    "2020-07-04",
    "2020-07-05",
    "2020-07-06",
    "2020-07-07",
    "2020-07-08",
    "2020-07-09",
    "2020-07-10",
    "2020-07-11",
    "2020-07-12",
    "2020-07-13",
    "2020-07-14",
    "2020-07-15",
    "2020-07-16",
    "2020-07-17",
    "2020-07-18",
    "2020-07-19",
  ],
  colors: ["#206bc4"],
  legend: {
    show: false,
  },
};

export const mentionChart = {
  chart: {
    type: "bar",
    fontFamily: "inherit",
    height: 240,
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
    animations: {
      enabled: false,
    },
    stacked: true,
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: "Web",
      data: [
        1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 12, 5, 8, 22, 6, 8, 6, 4, 1, 8, 24, 29, 51, 40, 47, 23, 26,
        50, 26, 41, 22, 46, 47, 81, 46, 6,
      ],
    },
    {
      name: "Social",
      data: [
        2, 5, 4, 3, 3, 1, 4, 7, 5, 1, 2, 5, 3, 2, 6, 7, 7, 1, 5, 5, 2, 12, 4, 6, 18, 3, 5, 2, 13,
        15, 20, 47, 18, 15, 11, 10, 0,
      ],
    },
    {
      name: "Other",
      data: [
        2, 9, 1, 7, 8, 3, 6, 5, 5, 4, 6, 4, 1, 9, 3, 6, 7, 5, 2, 8, 4, 9, 1, 2, 6, 7, 5, 1, 8, 3, 2,
        3, 4, 9, 7, 1, 6,
      ],
    },
  ],
  grid: {
    padding: {
      top: -20,
      right: 0,
      left: -4,
      bottom: -4,
    },
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    labels: {
      padding: 0,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    type: "datetime",
  },
  yaxis: {
    labels: {
      padding: 4,
    },
  },
  labels: [
    "2020-06-20",
    "2020-06-21",
    "2020-06-22",
    "2020-06-23",
    "2020-06-24",
    "2020-06-25",
    "2020-06-26",
    "2020-06-27",
    "2020-06-28",
    "2020-06-29",
    "2020-06-30",
    "2020-07-01",
    "2020-07-02",
    "2020-07-03",
    "2020-07-04",
    "2020-07-05",
    "2020-07-06",
    "2020-07-07",
    "2020-07-08",
    "2020-07-09",
    "2020-07-10",
    "2020-07-11",
    "2020-07-12",
    "2020-07-13",
    "2020-07-14",
    "2020-07-15",
    "2020-07-16",
    "2020-07-17",
    "2020-07-18",
    "2020-07-19",
    "2020-07-20",
    "2020-07-21",
    "2020-07-22",
    "2020-07-23",
    "2020-07-24",
    "2020-07-25",
    "2020-07-26",
  ],
  colors: ["#206bc4", "#79a6dc", "#bfe399"],
  legend: {
    show: false,
  },
};

export const developChart = {
  chart: {
    type: "area",
    fontFamily: "inherit",
    height: 192,
    sparkline: {
      enabled: true,
    },
    animations: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 0.16,
    type: "solid",
  },
  stroke: {
    width: 2,
    lineCap: "round",
    curve: "smooth",
  },
  series: [
    {
      name: "Purchases",
      data: [
        3, 5, 4, 6, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 8, 4, 14, 30, 17, 19, 15, 14, 25, 32, 40, 55,
        60, 48, 52, 70,
      ],
    },
  ],
  grid: {
    strokeDashArray: 4,
  },
  xaxis: {
    labels: {
      padding: 0,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    type: "datetime",
  },
  yaxis: {
    labels: {
      padding: 4,
    },
  },
  labels: [
    "2020-06-20",
    "2020-06-21",
    "2020-06-22",
    "2020-06-23",
    "2020-06-24",
    "2020-06-25",
    "2020-06-26",
    "2020-06-27",
    "2020-06-28",
    "2020-06-29",
    "2020-06-30",
    "2020-07-01",
    "2020-07-02",
    "2020-07-03",
    "2020-07-04",
    "2020-07-05",
    "2020-07-06",
    "2020-07-07",
    "2020-07-08",
    "2020-07-09",
    "2020-07-10",
    "2020-07-11",
    "2020-07-12",
    "2020-07-13",
    "2020-07-14",
    "2020-07-15",
    "2020-07-16",
    "2020-07-17",
    "2020-07-18",
    "2020-07-19",
  ],
  colors: ["#206bc4"],
  legend: {
    show: false,
  },
  point: {
    show: false,
  },
};

export const demoTable = [
  {
    avatar: "",
    commit: "Fix dart Sass compatibility (#29755)",
    date: "28 Nov 2019",
  },
  {
    avatar: "",
    commit: "Change deprecated html tags to text decoration classes (#29604)",
    date: "28 Nov 2019",
  },
  {
    avatar: "",
    commit: "justify-content:between ⇒ justify-content:space-between (#29734)",
    date: "28 Nov 2019",
  },
  {
    avatar: "",
    commit: "Update change-version.js (#29736)",
    date: "28 Nov 2019",
  },
  {
    avatar: "",
    commit: "Regenerate package-lock.json (#29730)",
    date: "28 Nov 2019",
  },
  {
    avatar: "",
    commit: "Fix dart Sass compatibility (#29755)",
    date: "28 Nov 2019",
  },
  {
    avatar: "",
    commit: "Fix dart Sass compatibility (#29755)",
    date: "28 Nov 2019",
  },
];
