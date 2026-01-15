#!/bin/bash
set -euo pipefail

mvn test
mvn failsafe:integration-test && mvn failsafe:verify
mvn package -DskipTests