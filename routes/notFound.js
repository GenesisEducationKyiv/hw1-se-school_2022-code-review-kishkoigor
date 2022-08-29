const notFound = res => {
  console.log('404');
  res.writeHead(404);
  res.end();
};

module.exports = notFound;
