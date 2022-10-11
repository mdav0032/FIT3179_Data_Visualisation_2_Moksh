var one_vg = "./json_files/1_arrivals_by_country_and_year_map.vg.json"; 
vegaEmbed("#arrivals_and_departures_map", one_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var two_vg = "./json_files/2_receipts_vs_expenditure_by_country_bar_chart.vg.json"; 
vegaEmbed("#receipts_and_expenditure_bar", two_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var three_vg = "./json_files/3_arrivals_and_departures_by_continent_treemap.vg.json"; 
vegaEmbed("#arrivals_and_departures_treemap", three_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var four_vg = "./json_files/4_attractions_by_continent_and_country_dendrogram.vg.json"; 
vegaEmbed("#attractions_dendrogram", four_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var five_vg = "./json_files/5_aus_traffic_by_airport_map.vg.json"; 
vegaEmbed("#airport_traffic_map", five_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var six_vg = "./json_files/6_purpose_donut.vg.json"; 
vegaEmbed("#purpose_donut", six_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);