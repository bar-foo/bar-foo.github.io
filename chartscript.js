var options1 = {
  chart: {
    type: 'bar'
  },
  title: {
	text: 'Pool Usage'
  },
  series: [{
    name: 'total_pool',
    data: [62,40,95,50,49,80,70,125,91]
  }],
  xaxis: {
    categories: ['JUL','AUG','SEP','OCT','NOV','DEC','JAN', 'FEB','MAR']
  },
  yaxis: {
    show: true,
    title: {
      text: 'GB'
    }
  },
  annotations: {
  yaxis: [
    {
      y: 100,
      borderColor: '#FF4560',
      label: {
        borderColor: '#FF4560',
        style: {
          color: '#fff',
          background: '#FF4560'
        },
        text: 'Pool Limit: 100'
      }
    }
  ]
}
}

var options2 = {
  chart: {
    type: 'bar'
  },
  title: {
	text: 'Top Five Devices'
  },
  plotOptions:{
    bar: {
          horizontal: true
    }
  },
  series: [{
    name: 'device_usage',
    data: [12.8,9.1,6.2,5.6,5.1]
  }],
  xaxis: {
    categories: ['Bill Phone','Oren Phone','Jon Phone','Tim Phone','Jon Tablet'],
    title: {
      text: 'GB'
  },
  yaxis: {
    show: true
    }
  },
  annotations: {
  xaxis: [
    {
      x: 10,
      borderColor: '#FF4560',
      label: {
        borderColor: '#FF4560',
        style: {
          color: '#fff',
          background: '#FF4560'
        },
        text: 'Warning'
      }
    }
  ]
}
}

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);

chart1.render();

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

chart2.render();