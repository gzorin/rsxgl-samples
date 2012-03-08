#version 130
uniform sampler2D texture;

varying vec2 uv;

void
main(void)
{
  //gl_FragColor = vec4(uv,0,1);
  //gl_FragColor = texture2D(texture,uv) * vec4(uv,0,1);

  vec4 tmp = texture2D(texture,uv);
  //gl_FragColor = vec4(tmp.r,tmp.r,tmp.r,1.0);
  gl_FragColor = tmp;
}
