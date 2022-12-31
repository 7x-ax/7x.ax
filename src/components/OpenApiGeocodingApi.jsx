import { Container } from '@/components/Container'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


export function OpenApiGeocodingApi() {
  return (
      <Container>
          <SwaggerUI url="/specifications/geocode-api.yml" />
      </Container>
  )
}
