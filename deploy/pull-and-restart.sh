#!/bin/bash

ssh podhost /bin/bash << EOF
    podman pull ghcr.io/zenmo/isie-website:latest
    echo "restarting"
    systemctl --user restart isie-website
EOF
