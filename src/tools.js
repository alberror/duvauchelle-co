export const generateButtonContent = type => {
  switch (type) {
    case "product_management":
      return "Je veux de l’aide pour concevoir mon projet"
    case "showcase":
      return "J’ai besoin d’un site vitrine rapidement"
    case "frontend":
      return "Un front aux oignons à partir de n’importe quelle API"
    case "fullstack":
      return "J’ai besoin d’un développeur full-stack"
    case "media":
      return "Mon site média avec un vrai CMS en deux semaines !"
    default:
      return "Contactez-moi"
  }
}
