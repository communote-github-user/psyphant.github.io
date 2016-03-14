---
title: 1.4 Build the core
tags: [development]
keywords: core, build, git clone
last_updated: March 10, 2016
---
If you like to build the core than you have to clone the project via Git first:

```
git clone https://github.com/communote/communote.git
```

When the cloned Communote is in place you can use maven to build it with a simple ```mvn```.

Few minutes later you will hopefully see a "Success" message on your screen. Now you can go to ```webapp/target```, rename your generated ```communote.war``` to ```ROOT.war``` and copy the WAR file to your Tomcat ```webapps``` directory. If exists remove the ```ROOT``` folder.

#ToDo:
(eigenes mvn Profile [fullbuild] anlegen)
-- Beschreibung wie man Plugins deployed
