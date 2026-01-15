#!/bin/bash
set -euo pipefail

mvn clean package
java -jar ./overview-server/target/overview-server-*-SNAPSHOT.jar --spring.profiles.active=dev