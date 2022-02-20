const path = require('path')

module.exports = {
    // resolves from test to snapshot path
    resolveSnapshotPath: (testPath, snapshotExtension) => {
        const directory = path.dirname(testPath)
        const filename = path.basename(testPath)
        return `${directory}/__snapshots__/${filename}${snapshotExtension}`
    },
    // resolves from snapshot to test path
    resolveTestPath: (snapshotFilePath, snapshotExtension) => {
        const directory = path.dirname(snapshotFilePath)
        const filename = path.basename(snapshotFilePath)
        return `${directory.replace('__snapshots__', '')}/${filename.replace(
            snapshotExtension,
            ''
        )}`
    },
    // Example test path, used for preflight consistency check of the implementation above
    testPathForConsistencyCheck: 'pv-icons/src/icons.spec.js',
}
