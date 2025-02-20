var config = {
    style: 'mapbox://styles/jingyi8/cm7cx4hcy005e01s25qci84wj',
    accessToken: 'pk.eyJ1IjoiamluZ3lpOCIsImEiOiJjbTZyYmh1bTMwN3YyMmtuMDFpbGJ2NXIzIn0.msR21mXy-ZgMGXktqQYErQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Is Singapore’s MRT Network Adequately Serving Its High-Density Population?',
    subtitle: 'Analyzing the relationship between population distribution, MRT station coverage, and accessibility across Singapore’s planning areas.',
    byline: 'By Zhang Jingyi',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Population Distribution in Singapore',
            description: 'Singapore’s population is unevenly distributed across different planning areas, as shown in this map. Each planning area is color-coded based on its total population, providing an overview of how people are concentrated across the city. While the central and northeastern regions tend to have higher population densities, other areas, such as the western and northern parts, are more sparsely populated. This distribution is influenced by factors such as urban planning policies, land use, and accessibility to key services and employment hubs.<br><br><img src="images/legend1.png" style="height:100%;width:300px;"></img>',
            location: {
                center: [103.71304, 1.35969],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'symbols',
                    opacity: 1
                },
                {
                    layer: 'MRTStation',
                    opacity: 0               
                },
                {
                    layer: 'PopulationbyPlanningArea',
                    opacity: 1                
                },
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: '800mBufferZone',
                    opacity: 0
                },
                {
                    layer: '3D-extrusions',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'symbols',
                    opacity: 0.3
                },
                {
                    layer: 'MRTStation',
                    opacity: 0.7               
                },
                {
                    layer: 'PopulationbyPlanningArea',
                    opacity: 0.5                
                },
                {
                    layer: 'heatmap',
                    opacity: 0.5
                },
                {
                    layer: '800mBufferZone',
                    opacity: 0.5
                },
                {
                    layer: '3D-extrusions',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'right',
            hidden: false,
            title: 'MRT Network and Accessibility',
            description: 'Singapore’s MRT network plays a crucial role in ensuring urban mobility. The heatmap on this page represents the density of MRT stations across the city, highlighting areas with higher station concentrations. Additionally, the buffer zones illustrate the areas covered within an 800-meter radius—approximately a 10-minute walking distance—from each station. These zones help evaluate how well the MRT network provides accessibility across different neighborhoods and whether some areas remain underserved.<br><br><img src="images/legend2.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.90304, 1.35969],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                speed: 0.2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'symbols',
                    opacity: 0
                },
                {
                    layer: 'MRTStation',
                    opacity: 1               
                },
                {
                    layer: 'PopulationbyPlanningArea',
                    opacity: 0                
                },
                {
                    layer: 'heatmap',
                    opacity: 1
                },
                {
                    layer: '800mBufferZone',
                    opacity: 1
                },
                {
                    layer: '3D-extrusions',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'symbols',
                    opacity: 0
                },
                {
                    layer: 'MRTStation',
                    opacity: 1               
                },
                {
                    layer: 'PopulationbyPlanningArea',
                    opacity: 0                
                },
                {
                    layer: 'heatmap',
                    opacity: 1
                },
                {
                    layer: '800mBufferZone',
                    opacity: 0.2
                },
                {
                    layer: '3D-extrusions',
                    opacity: 0.2
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Population Density and MRT Service Coverage',
            description: 'To better understand the relationship between population distribution and MRT accessibility, this map employs 3D extrusion to represent population density at the subzone level. Taller areas indicate higher population densities. When overlaid with the MRT station heatmap, it becomes evident that denser regions tend to have more MRT stations within close proximity. This suggests that the transport infrastructure is generally aligned with population needs, though some variations in coverage may still exist.<br><br><img src="images/legend3.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.97280, 1.35981],
                zoom: 9.7,
                pitch: 30,
                bearing: -30,
                speed: 0.2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'symbols',
                    opacity: 1
                },
                {
                    layer: 'MRTStation',
                    opacity: 1               
                },
                {
                    layer: 'PopulationbyPlanningArea',
                    opacity: 0                
                },
                {
                    layer: 'heatmap',
                    opacity: 1
                },
                {
                    layer: '800mBufferZone',
                    opacity: 0
                },
                {
                    layer: '3D-extrusions',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'symbols',
                    opacity: 0
                },
                {
                    layer: 'MRTStation',
                    opacity: 1               
                },
                {
                    layer: 'PopulationbyPlanningArea',
                    opacity: 0                
                },
                {
                    layer: 'heatmap',
                    opacity: 0.3
                },
                {
                    layer: '800mBufferZone',
                    opacity: 0.5
                },
                {
                    layer: '3D-extrusions',
                    opacity: 1
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Focus on High-Density Areas – Punggol & Choa Chu Kang',
            description: 'Examining high-density areas such as Punggol and Choa Chu Kang reveals that most of their residential zones fall within the 800-meter MRT buffer. This suggests that the current MRT network is well-equipped to serve the population in these regions, helping to alleviate pressure on transport infrastructure. In Punggol, nearly all residential areas are within walking distance of an MRT station, reinforcing the efficiency of transit-oriented development. Similarly, Choa Chu Kang benefits from MRT accessibility, ensuring that its dense population can rely on efficient public transport connectivity.<br><br><img src="images/legend4.png" style="height:100%; "></img>',
            location: {
                center: [103.74611, 1.36141],
                zoom: 10.8,
                pitch: -10,
                bearing: 0,
                speed: 0.4
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'symbols',
                    opacity: 1
                },
                {
                    layer: 'MRTStation',
                    opacity: 1               
                },
                {
                    layer: 'PopulationbyPlanningArea',
                    opacity: 0              
                },
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: '800mBufferZone',
                    opacity: 1
                },
                {
                    layer: '3D-extrusions',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'symbols',
                    opacity: 1
                },
                {
                    layer: 'MRTStation',
                    opacity: 1               
                },
                {
                    layer: 'PopulationbyPlanningArea',
                    opacity: 0                
                },
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: '800mBufferZone',
                    opacity: 1
                },
                {
                    layer: '3D-extrusions',
                    opacity: 1
                }
            ]
        }
    ]
};