export const name='hello-plugin'
export const inject = ['helloStartup']

export function apply(ctx) {
  console.log(ctx.helloStartup.message ?? '[hello-plugin] plugin loaded!')
}