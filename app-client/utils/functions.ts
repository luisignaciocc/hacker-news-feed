import moment from 'moment'

export const formatDate = (date: string): any => {
  const isToday = moment(date).isSame(moment.now(), 'day')
  const isYesterday = moment(date).isSame(moment().subtract(1, 'days'), 'day')
  if (isToday) {
    return moment(date).format('h:mm a')
  } else if (isYesterday) {
    return 'Yesterday'
  } else {
    return moment(date).format('MMM Do')
  }
}
