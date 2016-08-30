d3.json('miserables.json', createAdjacencyMatrix);

function createAdjacencyMatrix(data) {

  const adjacencyMatrix = d3.layout.adjacencyMatrix()
    .size([800,800])
    .nodes(data.nodes)
    .links(data.links)
    .directed(false)
    .nodeID(d => d.name);

  const matrixData = adjacencyMatrix();

  console.log(matrixData)

  const someColors = d3.scale.category20b();

  d3.select('svg')
    .append('g')
    .attr('transform', 'translate(50,50)')
    .attr('id', 'adjacencyG')
    .selectAll('rect')
    .data(matrixData)
    .enter()
    .append('rect')
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('x', d => d.x)
    .attr('y', d => d.y)
    .style('stroke', 'black')
    .style('stroke-width', '1px')
    .style('stroke-opacity', .1)
    .style('fill', d => someColors(d.source.group))
    .style('fill-opacity', d => d.weight * 0.8);

  d3.select('#adjacencyG')
    .call(adjacencyMatrix.xAxis);

  d3.select('#adjacencyG')
    .call(adjacencyMatrix.yAxis);
}