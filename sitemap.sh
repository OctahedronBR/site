#! /bin/bash

if [ ! -f /usr/bin/google-sitemapgen ]
then
	echo 'you need install google-sitemapgen: apt-get install google-sitemapgen'
	exit 42
fi

#generate config.xml
cat > /tmp/config-sitemap.xml << EOF
<?xml version="1.0" encoding="UTF-8"?>
 <site
  base_url="http://www.octahedron.com.br/"
  store_into="sitemap.xml"
  verbose="1"
  default_encoding="UTF-8"
  sitemap_type="web"
 >
  <filter action="drop" type="regexp"   pattern="/\.[^/]*"     />
  <filter action="drop" type="wildcard" pattern="*TODO*" />
  <filter action="drop" type="wildcard" pattern="**.sh*" />
  <filter action="drop" type="wildcard" pattern="**.bak*" />

  <url  href="http://www.octahedron.com.br/"  />
EOF
for file in *.html
do
    file=$(echo $file | cut -d"." -f1)
    echo "  <url  href=\"http://www.octahedron.com.br/${file}\"  />" >> /tmp/config-sitemap.xml 
done
echo " </site>" >> /tmp/config-sitemap.xml
# generate sitemap.xml
google-sitemapgen --config=/tmp/config-sitemap.xml

