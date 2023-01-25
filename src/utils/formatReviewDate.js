import { format } from 'date-fns'

export const formatReviewDate = reviewDate => {
    return format(Date.parse(reviewDate), 'dd.MM.yyyy')
}