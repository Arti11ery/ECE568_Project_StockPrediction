      var stock_name = '{{stock_name|safe}}';

      var trace = {
        x: data['date'],
        close: data['close'],
        high: data['high'],
        low: data['low'],
        open: data['open'],

        // cutomise colors
        increasing: {line: {color: 'red'}},
        decreasing: {line: {color: 'green'}},

        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'
      };

      var data = [trace];

      var layout = {
        dragmode: 'zoom',
        showlegend: false,
        xaxis: {
          autorange: true,
          title: stock_name,
           rangeselector: {
              x: 0,
              y: 1.2,
              xanchor: 'left',
              font: {size:10},
              buttons: [{
                  step: 'month',
                  stepmode: 'backward',
                  count: 1,
                  label: '1 month'
              }, {
                  step: 'month',
                  stepmode: 'backward',
                  count: 6,
                  label: '6 months'
              }, {
                  step: 'all',
                  label: 'All dates'
              }]
            }
        },
        yaxis: {
          autorange: true,
        }
      };

      Plotly.plot('myDiv', data, layout);