include $(srcdir)/../samples.am

eigen_LOCATION = $(top_srcdir)/extsrc/eigen
eigen_CPPFLAGS = -I$(eigen_LOCATION)

noinst_PROGRAMS = glassview.elf

objs = teapot.obj teddy.obj crab.obj yamato.obj
objs_H = $(objs:.obj=_obj.h)
objs_OBJS = $(objs:.obj=_obj.o)

SUFFIXES += .obj _obj.o _obj.h

%_obj.o: %.obj
	@echo "[bin2o]: $<"
	@$(bin2o)

%_obj.h: %_obj.o
	@echo "$<"

shaders = glassview.vert glassview.frag diffuse.vert diffuse.frag 
sources = glassview.cc $(shaders) \
	$(objs)
objects = $(objs_OBJS)

BUILT_SOURCES = $(call shader_headers,$(shaders)) \
	$(objs_H)
CLEANFILES = $(call shader_headers,$(shaders)) \
	$(objs_H) $(objs_OBJS)

glassview_elf_DEPENDENCIES = $(objects)
glassview_elf_SOURCES = ../common/main.c		\
	../common/math3d.cc ../common/sine_wave.c	\
	$(sources)

glassview_elf_CPPFLAGS = -D__RSX__ -I$(top_builddir)/src/common -I$(top_srcdir)/src/common -I$(top_srcdir)/include $(eigen_CPPFLAGS) $(PSL1GHT_CPPFLAGS) @ppu_libpng_CPPFLAGS@ @ppu_zlib_CPPFLAGS@ @ppu_assimp_CPPFLAGS@ @ppu_glassimp_CPPFLAGS@
glassview_elf_CFLAGS = -std=gnu99 -fgnu89-inline -O3
glassview_elf_LDFLAGS = $(PSL1GHT_LDFLAGS) @ppu_libpng_LDFLAGS@ @ppu_zlib_LDFLAGS@ @ppu_assimp_LDFLAGS@ @ppu_glassimp_LDFLAGS@
glassview_elf_LDADD = $(objects) -lGL -lEGL -lrsx -lgcm_sys -lnet -lio -lsysutil -lsysmodule -lstdc++ -lm -lrt -llv2 @ppu_libpng_LIBS@ @ppu_zlib_LIBS@ @ppu_assimp_LIBS@ @ppu_glassimp_LIBS@

TITLE           :=      GLASSVIEW
APPID           :=      RSXGLSMP2
CONTENTID       :=      UP0001-$(APPID)_00-0000000000000000
PKGFILES        :=      release
override ICON0		:=	$(srcdir)/../common/brewcrab.png

pkg: glassview.pkg

all-local: pkg

clean-local:
	@rm -rf pkg glassview.self glassview.pkg 
