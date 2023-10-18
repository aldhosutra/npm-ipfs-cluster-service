'use strict'

const fs = require('fs')
const path = require('path')

module.exports.path = function () {
  const paths = [
    path.resolve(path.join(__dirname, '..', 'ipfs-cluster-follow', 'ipfs-cluster-follow')),
    path.resolve(path.join(__dirname, '..', 'ipfs-cluster-follow', 'ipfs-cluster-follow.exe'))
  ]

  for (const bin of paths) {
    if (fs.existsSync(bin)) {
      return bin
    }
  }

  throw new Error('ipfs-cluster-follow binary not found, it may not be installed or an error may have occurred during installation')
}
