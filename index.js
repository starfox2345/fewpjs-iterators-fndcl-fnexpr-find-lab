
superbowlWin = (record) => {
    let result = record.find(record => record.result === 'W')
    return !!result ? result.year : undefined
    // Yeah alright, so it has to be 'result' no other
}