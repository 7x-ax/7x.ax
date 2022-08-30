import { Container } from '@/components/Container'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


export function OpenApi() {
  return (
      <Container>
          <SwaggerUI url="/specifications/distance-api.yml" />
      </Container>
  )
}
