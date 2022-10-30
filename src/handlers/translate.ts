import Context from '@/models/Context'
import translate from '@/helpers/translate'
import transliteration from '@/helpers/transliterator'

export default async function handleTranslate(ctx: Context) {
  const message = ctx.msg?.text
  if (!message) return

  const geText = transliteration(message)
  const translateText = await translate(geText, ctx.i18n.languageCode)

  return ctx.reply(translateText)
}
