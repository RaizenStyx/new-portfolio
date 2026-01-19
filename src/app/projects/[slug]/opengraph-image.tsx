import { ImageResponse } from 'next/og';
import { getProjectBySlug } from '@/lib/project-data';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Project Preview';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  // 1. Fetch the specific project data using the slug
  const project = getProjectBySlug(params.slug);

  // Fallback if project isn't found (shouldn't happen if page handles 404s, but good safety)
  if (!project) {
    return new ImageResponse(
      (
        <div style={{ background: 'black', color: 'white', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Project Not Found
        </div>
      ),
      { ...size }
    );
  }

  // 2. Generate the dynamic image
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b', 
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          border: '20px solid #27272a',
        }}
      >
        <div
          style={{
            background: '#fff',
            color: '#000',
            padding: '8px 20px',
            borderRadius: '50px',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 40,
            textTransform: 'uppercase',
          }}
        >
          {project.category}
        </div>

      
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: 'white',
            textAlign: 'center',
            marginBottom: 20,
            padding: '0 40px',
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </div>

        <div
          style={{
            fontSize: 30,
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          {project.shortDescription}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}