import { Container } from '@/components/Container'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


export function OpenApiTimezoneApi() {
  return (
      <Container>
          <SwaggerUI url="/specifications/timezone-api.yml" />
      </Container>
  )
}
