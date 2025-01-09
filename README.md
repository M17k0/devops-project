# devops-project

A project made for the Modern DevOps practices at Fmi Sofia.
The project builds a complete automated software delivery process with pipelines

## Project Overview
The project features:
- A CI pipeline for ensuring code quality and running essential checks on development branches.
- A CD pipeline for building, and deploying the application using Docker and Render.

## CI pipeline
The ```main``` branch is protected. On every push to a ```dev``` branch lint and test jobs are run. Then on pull request creation the full CI pipeline is run and it must succeed in order to be merged into the ```main``` branch. The steps that run check linters, tests and vulnerabilities in the code.

#### Steps
1. Linting: Runs linters to enforce code style and detect syntax issues.
2. Testing: Executes unit tests to verify functionality.
3. Database Migrations: Validates database migrations using a PostgreSQL service.
4. Static Analysis:
- SonarCloud: Performs static code analysis for maintainability, reliability, and security issues.
- Snyk: Scans for vulnerabilities in project dependencies.

Branch Protection:
The main branch is protected:
- Pull requests must pass all CI checks before merging.
- Direct pushes to main are restricted.

### CD pipeline
This pipeline is runned on every push to ```main``` via pull request. After successfully finishing the CI steps this pipeline builds a docker image and pushes it to docker hub and then redeploys in Render with the new docker image

#### Steps
1. Build Docker Image: Creates a containerized version of the application.
2. Push to Docker Hub: Uploads the Docker image to Docker Hub.
3. Deployment: Triggers deployment to Render using the new Docker image.

## Workflows and Jobs

### Linting Workflow (`lint.yml`)
  - Run linters.

### Testing Workflow (`test.yml`)
  - Run unit tests.

### Database Migration Test (`migrations-test.yml`)
  - Set up PostgreSQL service.
  - Validate database migrations using Flyway.

### Static Analysis Workflow (`validate.yml`)
  - Run **SonarCloud** static analysis.
  - Run **Snyk** vulnerability scanning.

### Docker Image Workflow (`docker-image.yml`)
  - Build Docker image using Docker Buildx.
  - Push the image to Docker Hub.

### Deployment Job
  - Trigger deployment to Render using the Render API.

### Secrets
- **DOCKER_PASSWORD** - Docker Hub password for image pushes.
- **DOCKER_USERNAME** - Docker Hub username for image pushes.
- **RENDER_API_KEY** - API key for triggering Render deployments.
- **RENDER_SERVICE_ID** - Render service identifier.
- **SNYK_TOKEN** - Token for Snyk vulnerability scanning.
- **SONAR_TOKEN** -	Token for SonarCloud analysis.
