import { Command } from 'commander'
import { parseCmdline } from '@deepseek-ai/dsh-cmdline'

export const name='hello-startup'
export const inject=['cmdlineArgs']

export function apply(ctx) {
    const program = new Command()
    .name('dsh --profile demo')
    .description('Run the hello plugin.')
    .helpOption('-h, --help', 'show this help')
    .option('--message <text>', 'message to print')

  program.action(() => {
    const { message } = program.opts()
    ctx.provide('helloStartup', { message })
  })

    parseCmdline(ctx, program)
}