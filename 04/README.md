a [d3 version 4](https://github.com/d3/d3/blob/master/API.md) port of the bl.ock [Adjacency Matrix Layout](http://bl.ocks.org/emeeks/15c005cba60aad26e11a) from [@Elijah_Meeks](https://twitter.com/elijah_meeks)

to make this example, I also ported the underlying adjacency matrix layout to [d3v4](https://github.com/d3/d3/blob/master/API.md). find that layout at the [d3-adjacency-matrix-layout](https://github.com/micahstubbs/d3-adjacency-matrix-layout) project on github. 

the dataset shown is the famous [Les Miserables character co-appeareance network](https://networkdata.ics.uci.edu/data.php?id=109)

---

#### Original `README.md`

---

A simple D3 layout that creates an adjacency matrix. In an adjacency matrix, unlike an arc diagram or a force-directed layout, the links are not lines and the nodes are not circles (or other icons). Instead, all nodes are shown across the x and y axes, and a link is indicated by a filled grid cell where the connected nodes meet.

The layout also includes helper functions to draw the x and y axes to label the nodes.

The [d3v3](https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md) version of the layout is [here](https://github.com/emeeks/d3-plugins/tree/master/adjacencyMatrix).