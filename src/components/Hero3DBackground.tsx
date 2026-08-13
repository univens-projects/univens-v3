import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
}

interface Edge {
  a: number;
  b: number;
}

interface Mesh3D {
  vertices: { x: number; y: number; z: number }[];
  edges: Edge[];
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  scale: number;
  color: string;
}

export const Hero3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for soft camera tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.0005;
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.0005;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Helper to generate 3D Icosahedron
    const createIcosahedron = (): { vertices: { x: number; y: number; z: number }[]; edges: Edge[] } => {
      const t = (1.0 + Math.sqrt(5.0)) / 2.0;
      const rawVerts = [
        { x: -1, y: t, z: 0 }, { x: 1, y: t, z: 0 }, { x: -1, y: -t, z: 0 }, { x: 1, y: -t, z: 0 },
        { x: 0, y: -1, z: t }, { x: 0, y: 1, z: t }, { x: 0, y: -1, z: -t }, { x: 0, y: 1, z: -t },
        { x: t, y: 0, z: -1 }, { x: t, y: 0, z: 1 }, { x: -t, y: 0, z: -1 }, { x: -t, y: 0, z: 1 }
      ];

      // Normalize vertices
      const vertices = rawVerts.map(v => {
        const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
        return { x: v.x / len, y: v.y / len, z: v.z / len };
      });

      const edges: Edge[] = [];
      // Connect vertices within distance threshold
      for (let i = 0; i < vertices.length; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
          const dx = vertices[i].x - vertices[j].x;
          const dy = vertices[i].y - vertices[j].y;
          const dz = vertices[i].z - vertices[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 1.1) {
            edges.push({ a: i, b: j });
          }
        }
      }

      return { vertices, edges };
    };

    // Helper to generate 3D Cube
    const createCube = (): { vertices: { x: number; y: number; z: number }[]; edges: Edge[] } => {
      const vertices = [
        { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
        { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
      ];
      const edges: Edge[] = [
        { a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 0 },
        { a: 4, b: 5 }, { a: 5, b: 6 }, { a: 6, b: 7 }, { a: 7, b: 4 },
        { a: 0, b: 4 }, { a: 1, b: 5 }, { a: 2, b: 6 }, { a: 3, b: 7 }
      ];
      return { vertices, edges };
    };

    const ico = createIcosahedron();
    const cube = createCube();

    // 3D Floating Meshes
    const meshes: Mesh3D[] = [
      {
        ...ico,
        x: -width * 0.28,
        y: -height * 0.1,
        z: 0,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
        rotSpeedX: 0.006,
        rotSpeedY: 0.009,
        rotSpeedZ: 0.003,
        scale: Math.min(width, height) * 0.18,
        color: '16, 185, 129' // Emerald
      },
      {
        ...ico,
        x: width * 0.32,
        y: height * 0.12,
        z: -100,
        rotX: 1,
        rotY: 0.5,
        rotZ: 0.2,
        rotSpeedX: -0.005,
        rotSpeedY: 0.008,
        rotSpeedZ: 0.004,
        scale: Math.min(width, height) * 0.22,
        color: '14, 165, 233' // Sky blue
      },
      {
        ...cube,
        x: width * 0.22,
        y: -height * 0.25,
        z: -200,
        rotX: 0.4,
        rotY: 0.8,
        rotZ: 0.1,
        rotSpeedX: 0.008,
        rotSpeedY: -0.006,
        rotSpeedZ: 0.005,
        scale: Math.min(width, height) * 0.11,
        color: '99, 102, 241' // Indigo
      },
      {
        ...cube,
        x: -width * 0.25,
        y: height * 0.22,
        z: -150,
        rotX: 0.2,
        rotY: 0.3,
        rotZ: 0.7,
        rotSpeedX: -0.007,
        rotSpeedY: 0.009,
        rotSpeedZ: -0.003,
        scale: Math.min(width, height) * 0.12,
        color: '20, 184, 166' // Teal
      }
    ];

    // 3D Particles
    const particleCount = 70;
    const particles: Point3D[] = [];
    const colors = ['16, 185, 129', '14, 165, 233', '99, 102, 241', '168, 85, 247'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: (Math.random() - 0.5) * 800,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const perspective = 800;

    // Project 3D point to 2D canvas
    const project = (x: number, y: number, z: number) => {
      const scale = perspective / (perspective + z + 400);
      return {
        x: x * scale + width / 2,
        y: y * scale + height / 2,
        scale
      };
    };

    // Rotate 3D point around X, Y, Z axes
    const rotate3D = (p: { x: number; y: number; z: number }, rx: number, ry: number, rz: number) => {
      // Rotate X
      let y1 = p.y * Math.cos(rx) - p.z * Math.sin(rx);
      let z1 = p.y * Math.sin(rx) + p.z * Math.cos(rx);
      let x1 = p.x;

      // Rotate Y
      let x2 = x1 * Math.cos(ry) + z1 * Math.sin(ry);
      let z2 = -x1 * Math.sin(ry) + z1 * Math.cos(ry);
      let y2 = y1;

      // Rotate Z
      let x3 = x2 * Math.cos(rz) - y2 * Math.sin(rz);
      let y3 = x2 * Math.sin(rz) + y2 * Math.cos(rz);
      let z3 = z2;

      return { x: x3, y: y3, z: z3 };
    };

    let time = 0;

    // Main Render Loop
    const render = () => {
      time += 0.015;

      // Smooth mouse tracking interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render 3D Particles & Connections
      const projectedParticles: { x: number; y: number; scale: number; color: string; z: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Boundary bounce inside 3D box
        if (Math.abs(p.x) > width * 0.8) p.vx *= -1;
        if (Math.abs(p.y) > height * 0.8) p.vy *= -1;
        if (Math.abs(p.z) > 400) p.vz *= -1;

        // Apply mouse tilt to particle position
        const rotated = rotate3D({ x: p.x, y: p.y, z: p.z }, mouseY, mouseX, 0);

        // Add subtle floating sine motion
        rotated.y += Math.sin(time + p.x * 0.01) * 15;

        const proj = project(rotated.x, rotated.y, rotated.z);
        projectedParticles.push({
          x: proj.x,
          y: proj.y,
          scale: proj.scale,
          color: p.color,
          z: rotated.z
        });

        // Draw particle node
        const alpha = Math.max(0.15, Math.min(0.85, proj.scale * 0.8));
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, p.radius * proj.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
        ctx.shadowBlur = 12 * proj.scale;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw particle constellation line connectors
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.25 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p1.color}, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      // Render 3D Wireframe Meshes
      meshes.forEach((mesh) => {
        // Continuous rotation update
        mesh.rotX += mesh.rotSpeedX;
        mesh.rotY += mesh.rotSpeedY;
        mesh.rotZ += mesh.rotSpeedZ;

        // Floating floating offset
        const floatY = mesh.y + Math.sin(time * 0.8 + mesh.scale) * 20;

        // Transform vertices
        const transformedVerts = mesh.vertices.map((v) => {
          // Scale vertex
          const scaled = { x: v.x * mesh.scale, y: v.y * mesh.scale, z: v.z * mesh.scale };
          // Self rotation
          const selfRotated = rotate3D(scaled, mesh.rotX, mesh.rotY, mesh.rotZ);
          // Translate
          const translated = {
            x: selfRotated.x + mesh.x,
            y: selfRotated.y + floatY,
            z: selfRotated.z + mesh.z
          };
          // Global camera tilt rotation from mouse
          const cameraRotated = rotate3D(translated, mouseY * 1.5, mouseX * 1.5, 0);
          // Project to 2D
          return project(cameraRotated.x, cameraRotated.y, cameraRotated.z);
        });

        // Draw edges
        mesh.edges.forEach((edge) => {
          const v1 = transformedVerts[edge.a];
          const v2 = transformedVerts[edge.b];

          const edgeAlpha = Math.max(0.2, Math.min(0.7, (v1.scale + v2.scale) * 0.4));

          ctx.beginPath();
          ctx.moveTo(v1.x, v1.y);
          ctx.lineTo(v2.x, v2.y);
          ctx.strokeStyle = `rgba(${mesh.color}, ${edgeAlpha})`;
          ctx.lineWidth = 1.2 * Math.min(v1.scale, v2.scale);
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${mesh.color}, 0.6)`;
          ctx.stroke();
          ctx.shadowBlur = 0;
        });

        // Draw glowing vertex nodes
        transformedVerts.forEach((v) => {
          const nodeAlpha = Math.max(0.3, Math.min(0.9, v.scale * 0.8));
          ctx.beginPath();
          ctx.arc(v.x, v.y, 3.5 * v.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${mesh.color}, ${nodeAlpha})`;
          ctx.shadowBlur = 12 * v.scale;
          ctx.shadowColor = `rgba(${mesh.color}, 0.9)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};
