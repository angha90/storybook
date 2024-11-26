export const inputPasswordTestCases = [
  {
    description: 'should apply red background class for weak password',
    password: 'weak',
    expectedClasses: 'sbl-bg-red-500'
  },
  {
    description: 'should apply orange background class for medium password',
    password: 'medium123',
    expectedClasses: 'sbl-bg-orange-500'
  },
  {
    description: 'should apply green background class for strong password',
    password: 'Strong#1',
    expectedClasses: 'sbl-bg-green-500'
  },
  {
    description: 'should apply padding to meter label',
    password: 'Strong#1',
    expectedClasses: 'sbl-pr-[2.5rem]',
    toggleMask: true
  }
]
