/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.persistence.menu.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import lombok.Data;


/**
 * @author user
 */
@Entity
@Table(name = "kategoria")
@Data
public class KategoriaEntity {

  @OneToMany(mappedBy = "parent", cascade = CascadeType.REMOVE)
  private List<KategoriaEntity> children = new ArrayList<>();

  @Id
  @Column(name = "id", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "megnevezes", nullable = false)
  private String name;

  @ManyToOne
  @JoinColumn(name = "parentId")
  private KategoriaEntity parent;

  @OneToMany(mappedBy = "kategoria", cascade = CascadeType.REMOVE)
  private List<TetelEntity> tetelek;

}
